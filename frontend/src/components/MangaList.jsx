import React, { useEffect, useState } from 'react'
import { Button, Card} from 'react-bootstrap'

const MangaList = () => {
  const [mangaList, setMangaList] = useState([])
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    const fetchList = JSON.parse(localStorage.getItem('mangaList'))
    const adjustedList = fetchList.slice(0,8)
    setMangaList(adjustedList)
  }, [])

  useEffect(()=>{
    if(isClick){
      setMangaList(JSON.parse(localStorage.getItem('mangaList')))
    }
  },[isClick])

  return (
    <div className='new-container'>
      <h2>NEW</h2>
      <div className='list-container'>
        {mangaList.map((m) => {
          return (
            <React.Fragment key={m._id}>
              <Card className='manga-content' style={{ width: '176px', height:'281px' }}>
                <Card.Img variant="top" src={m.img + '.png'} />
                <div className='manga-body'>
                    <Card.Text className='name'>{m.title}</Card.Text>
                    
                </div>
                <span className='read'>READ</span>
                <span className='vote'><i className="fa-solid fa-star"></i> {m.vote}</span> 
              </Card>
            </React.Fragment>
          )
        })}
      </div>
      <div 
        className={`btn ${isClick===true ? 'hide' : ''}`}
      >
        <Button
          onClick={()=>setIsClick(true)}
          id='readmore-btn'
        >
          READ MORE..
        </Button>
      </div>
      
    </div>
  )
}

export default MangaList