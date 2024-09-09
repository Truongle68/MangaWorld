const mongoose = require('mongoose')

const userSchema =  mongoose.Schema(
    {
       userName: {
            type: String,
            require:true,
            unique:true
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            require:true
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.Model('user', userSchema)

module.exports = User