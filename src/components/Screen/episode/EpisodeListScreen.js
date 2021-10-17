import React,{useEffect, useState} from 'react';
import {Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom';

import '../../../styles/screen/episodes.css'
import { ListScreen } from './ListScreen';

export const EpisodeListScreen = (props) => {

    const [comic, setComic] = useState({});
    
    useEffect(() => {
       getAnime()
       //eslint-disable-next-line
    }, []);

    const {id} = useParams();

    const getAnime = async() => {
        const url = `https://api.aniapi.com/v1/anime/${id}`;
        const response = await fetch(url);
        const {data} = await response.json();

        const anime = {
            id: data.id,
            titles: data.titles.en,
            description: data.descriptions.en,
            //genres: data.genres.map(res => {return res.genres}),
            image_cover: data.cover_image,
            banner_image: data.banner_image,
            score: data.score,
            season: data.start_date,
            trailer: data.trailer_url
        }
        setComic(anime)
    }

    return (
        <>
               
            <div className="header-episode">
                <Card className="bg-dark text-white">
                    <Card.Img className="fondo" src={comic.banner_image} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title style={{paddingTop: '20px', width:'600px'}}><h1 style={{backgroundColor:'white', color:'black', borderRadius:'30px', textAlign:'center'}}>{comic.titles}</h1></Card.Title>
                        <Card.Text style={{paddingTop: '50px', width:'410px'}}><h3 style={{backgroundColor:'white', color:'black',borderRadius:'30px', textAlign:'center'}} >Estreno: {comic.season}</h3></Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div>
                <Card style={{width: '40rem', flexDirection: 'right'}}>
                    <Card.Header as="h5" style={{color: 'black'}}>Descripcion</Card.Header>
                    <Card.Body>
                        <Card.Title>{comic.titles}</Card.Title>
                        <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>{comic.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <ListScreen image={comic.image_cover} trailer={comic.trailer}/>
            </div>
        </>
    )
}
