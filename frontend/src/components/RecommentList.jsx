import React, { useEffect, useState } from 'react'
import { fetchBooks } from '../services/mangaServices'
import { Button, Card } from 'react-bootstrap'

const RecommentList = () => {
    const [recommentList, setRecommentList] = useState([])

    const fetchAllBooks = async (req, res) => {
        const { data } = await fetchBooks()
        console.log(data)
        setRecommentList(data)
    }

    useEffect(() => {
        fetchAllBooks()
    }, [])

    return (
        <div className='rec-container'>
            <h3 className='title'>Recomment Manga</h3>
            <div className='manga'>
                {recommentList.map((m) => {
                    return (
                        <Card className='manga-content' style={{ width: '175px' }}>
                            <Card.Img variant="top" src={m.img + '.png'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default RecommentList