import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Tooltip } from 'react-tooltip'

const RecommentList = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mangaList, setMangaList] = useState([])

    useEffect(() => {
        setMangaList(JSON.parse(localStorage.getItem('mangaList')))
    }, [])

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
        else {
            setCurrentIndex(mangaList.length - 6)
        }
    }

    const handleNext = () => {
        if (currentIndex < mangaList.length - 6) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    return (
        <div className='rec-container'>
            <h3 className='title'>Recomment Manga</h3>
            <div className='list-container'>
                <Button className='left-btn' variant='danger' onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></Button>
                <div className='manga' style={{ transform: `translateX(-${currentIndex * 201}px)` }}>

                    {mangaList!=null && mangaList.length>0 &&
                     mangaList.map((m) => {
                        return (
                            <React.Fragment key={m._id}>
                                <Card className='manga-content' style={{ width: '175px' }}>
                                    <Card.Img variant="top" src={m.img + '.png'} />
                                    <div className='manga-body'>
                                        <div className='body-content'>
                                            <Card.Text
                                                data-tooltip-id='mytooltip'
                                                data-tooltip-content={m.title}
                                                data-tooltip-place='top-end'
                                            >
                                                {m.title}
                                            </Card.Text>
                                        </div>

                                    </div>
                                    <span className='read'>READ</span>
                                    <span className='vote'><i className="fa-solid fa-star"></i> {m.vote}</span>
                                </Card>
                                <Tooltip id='mytooltip' />
                            </React.Fragment>
                        )

                    })}

                </div>
                <Button className='right-btn' variant='danger' onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></Button>
            </div>
        </div>
    )
}

export default RecommentList