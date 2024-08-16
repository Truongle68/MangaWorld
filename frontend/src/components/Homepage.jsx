import React from 'react'
import RecommentList from './RecommentList'
import Banner from './Banner'
import MangaList from './MangaList'

const Homepage = () => {
  return (
    <div className='containers'>
      <div className=' white-board'>
        <RecommentList/>
        <Banner/>
        <MangaList/>
      </div>

    </div>
  )
}

export default Homepage