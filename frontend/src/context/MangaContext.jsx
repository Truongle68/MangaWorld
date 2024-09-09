import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MangaContext = createContext()

const MangaProvider = ({children}) => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        setUser(userInfo)
    },[navigate])

    return(
        <MangaContext.Provider value={{
            user,
            setUser
        }}> 
            {children}
        </MangaContext.Provider>
    )
}

export const MangaState = () => {
    return useContext(MangaContext)
}

export default MangaProvider