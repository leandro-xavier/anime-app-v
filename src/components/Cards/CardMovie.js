import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

export const CardMovie = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getAnimeMovie()
    }, []);

    const getAnimeMovie = async () => {
    const url = "https://api.aniapi.com/v1/anime/?formats=2&status=3";
    const resp = await fetch(url)
    const {data} = await resp.json()

    const anime = data.documents.map(res => {
        return{
            id: res.id,
            titles: res.titles.en,
            description: res.descriptions.it,
            imagen: res.cover_image,
            year: res.season_year
       
           }

    })
    
    setItem(anime)
}
    return (
        <div>
            {
                item.map(ani => (
                <Card key={ani.id} style={{ width: '12rem', height:'450px', float:'right'}}>
                <Card.Img variant="top" src={ani.imagen} />
                <Card.Body>
                    <Card.Title>{ani.titles}</Card.Title>
                    <Card.Footer>Año de estreno: {ani.year}</Card.Footer>
                    <Button variant="dark" as ={Link} to={`/ver/${ani.id}`}>Ver Anime</Button>
                </Card.Body>
                </Card>
                ))
            }
            
        </div>
    )
}
