const mongoose = require('mongoose')

const MangaSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        genres: {
            type:String,
            require: true
        },
        synopsis:{
            type:String,
            require:true
        },
        publishYear: {
            type: Number,
            require: true
        },
        img: {
            type: String,
            require: true
        },
        banner:{
            type: String,
            require: true
        },
        status: {
            //3: Done 
            //1: Ongoing
            //2: Paused 
            type: Number,
            require: true
        },
        vote:{
            type:Number,
            require:true
        },
    },
    {
        timestamps: true,
    }
)

const Manga = mongoose.model('book', MangaSchema)
module.exports = Manga