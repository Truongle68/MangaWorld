const Book = require('../model/bookModel')

const saveNewBook = async(req,res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            status: req.body.status
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

        return res.status(200).json({
            count: books.length,
            data: books
        })
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