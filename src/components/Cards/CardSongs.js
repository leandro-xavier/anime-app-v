import React,{useState, useEffect} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import './cardsong.css'

export const CardSongs = (anime) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getAnimeSong()
    }, []);

    const getAnimeSong = async () => {
  //  const url = "https://api.aniapi.com/v1/random/song/6";
  const url = "https://api.jikan.moe/v4/manga/1";
    const resp = await fetch(url)
    const {data} = await resp.json()

   /* const anime = data.map(res => {
        return{
            id: res.anime_id,
            title: res.title,
            artist: res.artist,
            album: res.album,
            year: res.year,
            url_pre: res.preview_url
           }

    })*/

    const anime = {
            id: data.mal_id,
            title: data.title,
            artist: data.type,
            album: data.status,
            year: data.chapters
           // url_pre: res.preview_url
           }
    
    setItem(anime)
}
    return (
        <div>
             <Card className='song'  key={anime.id}>
                <Card.Body>
                    <Card.Title style={{float:'left'}}>{anime.title}</Card.Title>
                    
                    <Button style={{float:'right' , marginRight:'5px', marginTop:'40px'}} variant="dark" as ={Link} to={`/ver/song/${anime.id}`}>ver cancion</Button>
                    
                </Card.Body>
               
                </Card>
        </div>
    )
}
