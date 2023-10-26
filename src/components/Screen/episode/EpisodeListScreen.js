import React,{useEffect, useState} from 'react';
import {Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import '../../../styles/screen/episodes.css'
import { ListScreen } from './ListScreen';
import { removeTags } from '../../../helpers/entidadesConvert';

export const EpisodeListScreen = () => {
    const imageNo = 'https://www.allfatec.com.mx/administracion/productos/imagenes/no-disponible.jpg';
    const videoNo = 'https://png.pngtree.com/png-clipart/20210429/ourlarge/pngtree-no-video-cartoon-prohibition-symbol-png-image_3245145.jpg'
    const [comic, setComic] = useState({});
    useEffect(() => {
       getAnime()
       //eslint-disable-next-line
    }, []);

    const {id} = useParams();

    const getAnime = async() => {
        const url = `https://api.jikan.moe/v4/anime/${id}`;
        const response = await fetch(url);
        const {data} = await response.json();
      

        
        const anime = {
            id: data.mal_id,
            titles: data.title,
            description: data.synopsis,
            //genres: data.genres.map(res => {return res.genres}),
            image_cover: data.images.jpg.image_url,
            banner_image: data.images.jpg.large_image_url,
            score: data.score,
            season: data.season,
            trailer: data.trailer.embed_url
        }
        setComic(anime)
    }

    return (
        <>
               
            <div className="header-episode">
                <Card className="bg-dark text-white">
                    {comic.banner_image ? <Card.Img className="fondo" src={comic.banner_image} alt="Card image" /> :  <Card.Img className="fondo" src={imageNo} alt=" image" />}        
                    <Card.ImgOverlay>
                        <Card.Title style={{paddingTop: '20px', width:'600px'}}>{comic.titles}</Card.Title>
                        <Card.Text style={{paddingTop: '50px', width:'410px'}}>Estreno: {comic.season}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div>
                <Card style={{width: '40rem', flexDirection: 'right'}}>
                    <Card.Header as="h5" style={{color: 'black'}}>Descripcion</Card.Header>
                    <Card.Body>
                        <Card.Title>{comic.titles}</Card.Title>
                        <Card.Text className="text-muted" style={{fontFamily:'cursive'}}>{ comic.description ? removeTags(comic.description) : <h4>hola</h4>}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <h2 className='h2'>Anime Trailer</h2>
               {comic.trailer ? <iframe  key={comic.id} width="1200" height="700" src={comic.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:  <Card.Img className="fondo" src={videoNo} alt=" image" /> } 

               {/* <ListScreen id={comic.id} image={comic.image_cover} trailer={comic.trailer}/> */} 
            </div>
        </>
    )
}
