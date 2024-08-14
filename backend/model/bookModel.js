const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        publishYear: {
            type: Number,
            require: true
        },
        status: {
            //0: Done 
            //1: Ongoing
            //2: Paused 
            type: Number,
            require: true
        }
    },
    {
        timestamps: true,
    }
)

const Book = mongoose.model('book', bookSchema)
module.exports = Book