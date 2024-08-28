import axios from "./api";

const fetchBooks = async() => {
    return await axios.get('/books')
}

const searchManga = async(seachText) => {
    return await axios.get(`/books?search=${seachText}`)
}

export {
    fetchBooks,
    searchManga
}