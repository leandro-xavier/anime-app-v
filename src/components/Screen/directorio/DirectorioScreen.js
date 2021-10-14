import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';
import { Navigation } from '../../Navbar/Navigation'
import '../../../styles/screen/directorio.css'

export const DirectorioScreen = ({cover_image}) => {

    const [comic, setComic] = useState([])

    useEffect(() => {
        getAllAnime()
    }, [])

    const getAllAnime = async() => {
    const url = 'https://api.aniapi.com/v1/anime';
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

    return (
        <>
        <Navigation/>
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
             
        </>
    )
}
