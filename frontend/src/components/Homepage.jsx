import React, { useEffect } from 'react'
import RecommentList from './RecommentList'
import Banner from './Banner'
import MangaList from './MangaList'
import { fetchBooks } from '../services/mangaServices'

const Homepage = () => {

  const fetchAllMangas = async (req, res) => {
    const { data } = await fetchBooks()
    localStorage.setItem('mangaList', JSON.stringify(data))
  }
  useEffect(() => {
    fetchAllMangas()
  }, [])

  return (
    <div className='containers'>
      <div className=' white-board'>
        <RecommentList />
        <Banner />
        <MangaList />
      </div>

    </div>
  )
}

export default Homepage