import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const MangaContext = createContext()

const MangaProvider = ({children}) => {
    const [mangaList, setMangaList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const mangaList = JSON.parse(localStorage.getItem('mangaList'))
        console.log(mangaList)
        if(!mangaList){
            navigate('/')
        }
    },[navigate])
}

export const MangaState = () => {
    return useContext(MangaContext)
}

export default MangaProvider