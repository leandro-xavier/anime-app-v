import React,{useState, useEffect} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

export const CardSongs = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getAnimeSong()
    }, []);

    const getAnimeSong = async () => {
    const url = "https://api.aniapi.com/v1/song/?year=2021&season=3&type=0";
    const resp = await fetch(url)
    const {data} = await resp.json()

    const anime = data.documents.map(res => {
        return{
            id: res.anime_id,
            title: res.title,
            artist: res.artist,
            album: res.album,
            year: res.year,
            url_pre: res.preview_url
           }

    })
    
    setItem(anime)
}
    return (
        <div>
            {
                item.map(ani => (
                <Card style={{ width: '570px', height:'120px'}}>
                <Card.Img variant="top" src='' />
                <Card.Body>
                    <Card.Title style={{float:'left'}}>{ani.title}</Card.Title>
                    
                    <Button style={{float:'right' , marginRight:'5px', marginTop:'40px'}} variant="dark" as ={Link} to={`/ver/song/${ani.id}`}>ver cancion</Button>
                    <Card.Text style={{float:'right' , marginRight:'5px'}} ><ReactAudioPlayer style={{width:'150px', marginTop:'30px'}} src={ani.url_pre}  controls/></Card.Text>
                </Card.Body>
               
                </Card>
                ))
            }
            
        </div>
    )
}
