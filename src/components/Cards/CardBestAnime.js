import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';

export const CardBestAnime = () => {

const [item, setItem] = useState([])

    useEffect(() => {
        getAnimeNinja()
    }, []);

const getAnimeNinja = async () => {
    //const url = "https://api.aniapi.com/v1/random/anime/4/true";
    const url = "https://api.jikan.moe/v4/random/anime";
    const resp = await fetch(url)
    const {data} = await resp.json()


    const animeNinja = {
            id: data.mal_id,
            titles: data.title,
            description: data.synopsis,
            imagen: data.images.jpg.image_url,
            year: data.year
    }

    console.log(animeNinja)

    
   // const animeNinja = data.map(res => {

       // return  {
         //   id: res.mal_id,
           // titles: res.title,
         //   description: res.synopsis,
          //  imagen: res.images.jpg.image_url,
          //  year: res.year
           //}

    //})
    
    setItem(animeNinja)
}
    return (  
        /*     
        <>
        {
            item.map(dat => (
                <Card  key={dat.id} style={{ width: '12rem', height:'550px', float:'right'}}>
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
        */

         
                <Card  key={item.id} style={{ width: '12rem', height:'550px', float:'right'}}>
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body>
                    <Card.Title>{item.titles}</Card.Title>
                    <Card.Footer>Año de estreno: {item.year}</Card.Footer>
                    <Button variant="dark" as ={Link} to={`/ver/${item.id}`}>Ver Anime</Button>
                </Card.Body>
                </Card>
            
    )
}
