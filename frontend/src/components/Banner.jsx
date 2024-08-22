import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Banner = () => {
  const [mangaList, setMangaList] = useState([])
  const [variant, setVariant] = useState('danger')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMangaList(JSON.parse(localStorage.getItem('mangaList')))
  }, [])

  useEffect(()=>{
    let bannerTotal=0
    mangaList.map((m)=>
      m.banner!==''? bannerTotal++ : bannerTotal
    )
    if(!isHovered){
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => 
           (prevIndex+1) % bannerTotal
          )
      }, 3000);

      return () => clearInterval(interval)
    }
  },[isHovered, mangaList.length])

  return (
    <div className='banner-container'>
      <div className='banner-list' style={{ transform: `translateX(-${currentIndex * 800}px)` }} on>
        {mangaList != null && mangaList.length > 0 &&
          mangaList.map((m) => {
            if (m.banner !== '') {
              return (
                <div 
                  key={m._id} 
                  className='banner'
                  onMouseEnter={()=>setIsHovered(true)}  
                  onMouseLeave={()=>setIsHovered(false)}
                >
                  <img src={m.banner + '.png'} />
                  <div className='banner-content'>
                    <h3 >{m.title}</h3>
                    <div style={{width: '30%',display: 'flex', justifyContent:'space-between'}}>
                      <span><i class="fa-solid fa-star"></i> {m.vote}</span>
                      <span><i className="fa-regular fa-calendar-days"></i> {m.publishYear}</span>
                    </div>
                    <p className='synopsis'>{m.synopsis}</p>
                    <p><i class="fa-solid fa-pen"></i> Author: {m.author}</p>
                    <p><i class="fa-solid fa-book"></i> Genres: {m.genres}</p>
                    <Button
                      variant={variant}
                      onMouseEnter={() => setVariant('light')}
                      onMouseLeave={() => setVariant('danger')}
                    >
                      <i className="fa-brands fa-readme"></i> READ
                    </Button>
                  </div>
                </div>

              )

            }
          })
        }

      </div>
      <div className='owl-page-container'>
        {mangaList.map((m,index) => {
          if (m.banner !== '') {
            return (
              <div 
                key={index}
                onClick={()=>setCurrentIndex(index)} 
                className = {`owl-page ${currentIndex === index ? 'active' : ''}`}
              ></div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Banner