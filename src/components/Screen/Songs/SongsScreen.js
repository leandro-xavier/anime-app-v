import React,{useEffect, useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Card, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import '../../../styles/screen/episodes.css'
import { AnimeSongsScreen } from './AnimeSongsScreen';
import { CardAllClubs } from '../../Cards/CardAllClubs';


export const SongsScreen = (props) => {
    const [comic, setComic] = useState({});
    
    useEffect(() => {
       getSong()
       //eslint-disable-next-line
    }, []);

    const {id} = useParams();

    const getSong = async() => {
        const url = `https://api.jikan.moe/v4/manga/${id}`;
        const response = await fetch(url);
        const {data} = await response.json();

        const song = {
            id: data.mal_id,
            titles: data.title,
            artist: data.season
            //genres: data.genres.map(res => {return res.genres}),
        }
        setComic(song)
    }
    return (
        
            <>
                
             <div>
                        <Card style={{width: '800px' ,height:'480px',float:'right', marginRight:'110px', marginTop:'30px'}}>
                            <Card.Header as="h5" style={{color: 'black'}}>Autor: {comic.artist}</Card.Header>
                            <Card.Body>
                                <Card.Title>Titulo: {comic.titles}</Card.Title>
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>Album: {comic.artist}</Card.Text>
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>Año: {comic.titles}</Card.Text>
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>
                               
                                </Card.Text>
                              
                            </Card.Body>
                        </Card>
                    </div>
            <CardAllClubs/>
                    
            </>
    )
}
