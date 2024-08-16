import axios from "./api";

const fetchBooks = async() => {
    return await axios.get('/books')
}

export {
    fetchBooks
}