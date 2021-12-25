import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';

import '../../../styles/screen/directorio.css'

export const DirectorioScreen = ({cover_image}) => {

    const initialState = 1
    const [comic, setComic] = useState([])
    const [page, setPage] = useState(initialState)

    useEffect(() => {
       getAllAnime()
    }, [page, setPage])

    const limit = 20

    const getAllAnime = async () => {
    const url = `https://api.aniapi.com/v1/anime?page=${page}&per_page=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json()
   
    const anime = data.documents.map(ani => {
        return {
            id: ani.id,
            id_ani: ani.anilist_id,
            url: ani.cover_image,
            titles: ani.titles.en,
            year: ani.season_year
        }
    })  
    setComic(anime)
}

const handleNextPage = () => {
    if(page >= 719) {
       console.log('la ultima pagina es 719');
    }else{
        setPage(nextPage => nextPage + 1)
    }
    
}

const handlePreviusPage = () => {
    if(page <= 1){
        console.log(' es menor a 1');
    }else{
        setPage(prevPage => prevPage - 1)
    }
        
}
  
console.log(page);
    return (
        <>
     
        {
            comic.map(goku => (
                        <Card key={goku.id} style={{ width: '300px', height:'600px', float: 'right' }}>
                            <Card.Img  variant="top" src={goku.url} />
                            <Card.Body>
                                <Card.Title >{goku.titles}</Card.Title>
                                <Card.Footer>{goku.year}</Card.Footer>
                                <Button className="btn btn-dark" as={Link} to={`/ver/${goku.id}`}>ver anime</Button>
                            </Card.Body>
                        </Card> 
            ))
        }
             <Button style={{margin: '200px'}} variant='danger' onClick={handlePreviusPage}>previus  page</Button>
             <Button style={{margin: '200px'}} variant='danger' onClick={handleNextPage}>next page</Button>
        </>
    )
}
