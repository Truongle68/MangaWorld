import React from 'react'

const SearchList = (props) => {
    const {searchResult} = props

  return (
    <div className='searchlist-container'>
        {searchResult.map((m)=>{
            return(
                <div key={m._id} className='search-result'>
                    <img src={m.img+'.png'} />
                    <div className='content'>
                        <p className='name'>{m.title}</p>
                        <div className='description'>
                            <p><strong>Published Year:</strong> {m.publishYear}</p>
                            <p><strong>Author:</strong> {m.author}</p>
                            <p><strong>Genres:</strong> {m.genres}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default SearchList