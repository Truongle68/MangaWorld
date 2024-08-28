const Manga = require('../model/bookModel')

const saveNewManga = async(req,res) => {
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
        const newManga = {
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
        const manga = await Manga.create(newManga)

        return res.status(201).send(manga)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const fetchMangas = async(req,res) => {
    try {
        const keyword = req.query.search
        ? {
            title: {$regex: req.query.search, $options: "i"}
        }
        : {}
        const mangas = await Manga.find(keyword)

        return res.status(200).json(mangas)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const changeMangaStatus = async(req,res) => {
    try {
        const manga = await Manga.findByIdAndUpdate(
            req.body._id,
            {status: req.body.status},
            {new: true}
        )
        return res.status(200).json(manga)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = {
    saveNewManga,
    fetchMangas,
    changeMangaStatus
}