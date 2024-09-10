const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


const protect = asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        try {
            token = req.headers.authorization.split(" ")[1]
            //decode token id
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            //to use in the rest of middleware or route handler
            req.user = await User.findById(decode.id).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not authorized, token fail!")
        }
    }
    if(!token){
        res.status(401)
        throw new Error("Not authorized, no token!")
    }
})

module.exports = {protect}