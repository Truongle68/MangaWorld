const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.pre('save',async function(next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('user', userSchema)

module.exports = User