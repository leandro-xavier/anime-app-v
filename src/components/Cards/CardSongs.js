import React,{useState, useEffect} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import './cardsong.css'
import { CardAllClubs } from './CardAllClubs';

export const CardSongs = (anime) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getAnimeSong()
    }, []);

    const getAnimeSong = async () => {
  //  const url = "https://api.aniapi.com/v1/random/song/6";
  const url = "https://api.jikan.moe/v4/seasons/upcoming?limit=3";
    const resp = await fetch(url)
    const {data} = await resp.json()

   const anime = data.map(res => {
        return{
            id: res.mal_id,
            title: res.title,
            season: res.season,
            album: res.album,
            year: res.year,
            url_pre: res.images.jpg.image_url
           }

    })

   // const anime = {
    //        id: data.mal_id,
       //     title: data.title,
         
       //artist: data.type,
    //        album: data.status,
    //        year: data.chapters
           // url_pre: res.preview_url
  //         }
    
    setItem(anime)
}
    return (
<div>
        {
            item.map(ani => (
                <Card className='song'  key={ani.id}>
                <Card.Body>
                    <Card.Title style={{float:'left'}}>{ani.title}</Card.Title>
                    <Card.Img style={{float:'left', width:'80px', height:'80px'}} src={ani.url_pre} />
                    <Button style={{float:'right' , marginRight:'5px', marginTop:'40px'}} variant="dark" as ={Link} to={`/ver/song/${ani.id}`}>Informacion de estreno</Button>
                    
                </Card.Body>
               
                </Card>
                   
            ))
        }
        </div>
    )
}
