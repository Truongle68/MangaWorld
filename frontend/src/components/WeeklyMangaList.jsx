import React, { useEffect, useState } from 'react'

const WeeklyMangaList = () => {
    const [mangaList, setMangaList] = useState([])

    useEffect(()=>{
        const preMangaList = JSON.parse(localStorage.getItem('mangaList'))
        if(preMangaList){
            const sortedMangaList = preMangaList.sort((a,b)=> {
                if(a.vote === b.vote){
                    return a.title.localeCompare(b.title)
                }
                return b.vote - a.vote
            })
            setMangaList(sortedMangaList)
        }
    },[])

  return (
    <div className='wml-container'>
        <div className='header'>
            <h4>HOT MANGA</h4>
        </div>
        <div className='wml-content'>
            {mangaList.map((m, index)=>{
                while(index<10){
                return(
                    <div key={m._id} className='content-container'>
                        <img src={m.img+'.png'} />
                        <div className="bookmark-shape">#{index+1}</div>
                        <div className='content-desc'>
                            <p className='name'>{m.title}</p>
                            <div className='element'>
                                <span className='vote'><i className="fa-solid fa-star"></i> {m.vote}</span>
                                <span style={{padding:'0px 15px'}}><i className="fa-regular fa-clock"></i></span>
                                <span><i className="fa-regular fa-calendar-days"></i> {m.publishYear}</span>
                            </div>
                        </div>
                    </div>
                )
            }})}
        </div>
    </div>
  )
}

export default WeeklyMangaList