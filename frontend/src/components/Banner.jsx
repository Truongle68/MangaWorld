import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Banner = () => {
  const [bannerList, setBannerList] = useState([])
  const [variant, setVariant] = useState('danger')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const mangaList = JSON.parse(localStorage.getItem('mangaList'))
    const filterList = mangaList.filter((m)=> m.banner!=='')
    setBannerList(filterList)
  }, [])

  useEffect(()=>{
    if(!isHovered){
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => 
           (prevIndex+1) % bannerList.length
          )
      }, 3000);

      return () => clearInterval(interval)
    }
  },[isHovered, bannerList.length])

  return (
    <div className='banner-container'>
      <div className='banner-list' style={{ transform: `translateX(-${currentIndex * 800}px)` }}>
        {bannerList != null && bannerList.length > 0 &&
          bannerList.map((m) => {
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
                      <span><i className="fa-solid fa-star"></i> {m.vote}</span>
                      <span><i className="fa-regular fa-calendar-days"></i> {m.publishYear}</span>
                    </div>
                    <p className='synopsis'>{m.synopsis}</p>
                    <p><i className="fa-solid fa-pen"></i> Author: {m.author}</p>
                    <p><i className="fa-solid fa-book"></i> Genres: {m.genres}</p>
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

            
          })
        }

      </div>
      <div 
        className='owl-page-container'
        onMouseEnter={()=>setIsHovered(true)}  
        onMouseLeave={()=>setIsHovered(false)}
      >
        {bannerList.map((m,index) => {
            return (
              <div 
                key={index}
                onClick={()=>setCurrentIndex(index)} 
                className = {`owl-page ${currentIndex === index ? 'active' : ''}`}
              ></div>
            )
        })}
      </div>
    </div>
  )
}

export default Banner