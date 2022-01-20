import React,{useEffect, useState} from 'react';
import {Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom';

import '../../../styles/screen/episodes.css'
//import { ListScreen } from './ListScreen';

export const EpisodeListScreen = () => {

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
        console.log(data);

        
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
                        <Card.Title style={{paddingTop: '20px', width:'600px'}}>{comic.titles}</Card.Title>
                        <Card.Text style={{paddingTop: '50px', width:'410px'}}>Estreno: {comic.season}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div>
                <Card style={{width: '40rem', flexDirection: 'right', marginTop:'20px'}}>
                    <Card.Header as="h5" style={{color: 'black'}}>Descripcion</Card.Header>
                    <Card.Body>
                        <Card.Title>{comic.titles}</Card.Title>
                        <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>{comic.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="trailer">
                <h3>Trailer</h3>
                <iframe src={comic.trailer} controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/*<ListScreen id={comic.id} image={comic.image_cover} trailer={comic.trailer}/>*/}
            </div>
        </>
    )
}
