import React,{useEffect, useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Card, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import '../../../styles/screen/episodes.css'
import { AnimeSongsScreen } from './AnimeSongsScreen';


export const SongsScreen = (props) => {
    const [comic, setComic] = useState({});
    
    useEffect(() => {
       getSong()
       //eslint-disable-next-line
    }, []);

    const {id} = useParams();

    const getSong = async() => {
        const url = `https://api.aniapi.com/v1/song/${id}`;
        const response = await fetch(url);
        const {data} = await response.json();

        const song = {
            id: data.id,
            titles: data.title,
            artist: data.artist,
            //genres: data.genres.map(res => {return res.genres}),
            album: data.album,
            year: data.year,
            preview_url: data.preview_url,
            spotify_url: data.open_spotify_url,
            spotify_locale_url: data.local_spotify_url
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
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>Album: {comic.album}</Card.Text>
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>Año: {comic.year}</Card.Text>
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>
                                <ReactAudioPlayer src={comic.preview_url}  controls/>
                                </Card.Text>
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}> 
                                <Button variant="dark" href={comic.spotify_url}>Online Spotify</Button>
                                </Card.Text>
                                <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>
                                <Button variant="dark" href={comic.spotify_locale_url}>Local Spotify</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        {/*  <ListScreen image={comic.image_cover} trailer={comic.trailer}/>*/} 
                        <AnimeSongsScreen style={{float:'left'}} idSo={comic.id}/>
                    </div>
            </>
    )
}
