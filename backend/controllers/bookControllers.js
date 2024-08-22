const Book = require('../model/bookModel')

const saveNewBook = async(req,res) => {
    try {
        if(
            !req.body.title ||
            !req.body.genres ||
            !req.body.img ||
            !req.body.status
        ){
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            genres: req.body.genres,
            synopsis: req.body.synopsis,
            publishYear: req.body.publishYear,
            img: req.body.img,
            banner: req.body.banner,
            status: req.body.status,
            vote: req.body.vote
        }
        const book = await Book.create(newBook)

        return res.status(201).send(book)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const fetchBooks = async(req,res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json(books)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const changeBookStatus = async(req,res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.body._id,
            {status: req.body.status},
            {new: true}
        )
        return res.status(200).json(book)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = {
    saveNewBook,
    fetchBooks,
    changeBookStatus
}