import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';

export const CardBestAnime = () => {

const [item, setItem] = useState([])

    useEffect(() => {
        getAnimeNinja()
    }, []);

const getAnimeNinja = async () => {
    const url = "https://api.aniapi.com/v1/anime/?genres=Ninja&year=2021";
    const resp = await fetch(url)
    const {data} = await resp.json()

    const animeNinja = data.documents.map(res => {

        return  {
            id: res.id,
            titles: res.titles.en,
            description: res.descriptions.it,
            imagen: res.cover_image,
            year: res.season_year
           }

    })
    
    setItem(animeNinja)
}

    return (
        
        <>
        {
            item.map(dat => (
                <Card  key={dat.id} style={{ width: '9rem',height:'550px', float:'right'}}>
                <Card.Img variant="top" src={dat.imagen} />
                <Card.Body>
                    <Card.Title>{dat.titles}</Card.Title>
                    <Card.Footer>Año de estreno: {dat.year}</Card.Footer>
                    <Button variant="dark" as ={Link} to={`/ver/${dat.id}`}>Ver Anime</Button>
                </Card.Body>
                </Card>
            ))
        }
           
        </>
        
    )
}
