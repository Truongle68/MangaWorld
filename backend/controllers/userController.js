const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler(async (req,res) => {
    const {userName, email, password, re_password} = req.body
    if(!userName || !email || !password){
        res.status(400)
        throw new Error('Missing fields!')
    }
    if(password!==re_password){
        res.status(400)
        throw new Error('Re-password does not match to password!');
    }
    const existUser = await User.findOne({
        $or: [
            {userName},
            {email}
        ]
    })
    if(existUser){
        res.status(400)
        throw new Error("User already exist!");
        
    }
    const user = await User.create({
        userName,
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Register unsuccessfully!");
        
    }
})

const authUser = asyncHandler(async(req,res)=>{
    const {userName, password} = req.body
    if(!userName || !password){
        res.status(400)
        throw new Error("Missing fields!");
    }
    const user = await User.findOne({
        $or: [
            {userName: userName},
            {email:userName}
        ]
    })
    if(user && (await user.matchPassword(password))){
        console.log("Login successfully!")
        res.json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid userName or password!");
        
    }
})

module.exports = {
    registerUser,
    authUser
}