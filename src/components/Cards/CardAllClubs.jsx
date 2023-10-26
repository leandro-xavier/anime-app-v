import React,{useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


export const CardAllClubs = () => {

  const [item, setItem] = useState([])

    useEffect(() => {
        getAnimeNinja()
    }, []);

const getAnimeNinja = async () => {
    //const url = "https://api.aniapi.com/v1/random/anime/4/true";
    const url = "https://api.jikan.moe/v4/clubs?limit=4";
    const resp = await fetch(url)
    const {data} = await resp.json()

/*
    const animeNinja = {
            id: data.mal_id,
            titles: data.title,
            description: data.synopsis,
            imagen: data.images.jpg.image_url,
            year: data.year
    }*/


    
    const animeNinja = data.map(res => {

        return  {
            id: res.mal_id,
            nombre: res.name,
            description: res.created,
            imagen: res.images.jpg.image_url,
            year: res.access,
            category: res.category,
            access: res.access
           }

    })
    
    setItem(animeNinja)
}
  
  return (
    <>

    {
            item.map(dat => (
                <Card  key={dat.id} style={{ width: '12rem', height:'550px', float:'right'}}>
                <Card.Img variant="top" src={dat.imagen} />
                <Card.Body>
                    <Card.Title>{dat.nombre}</Card.Title>
                    <Card.Footer>Acceeso: {dat.access}</Card.Footer>
                    <Button variant="dark" as ={Link} to={`/ver/${dat.id}`}>Ver Club</Button>
                </Card.Body>
                </Card>
            ))
        }        
    </>
  )
}
