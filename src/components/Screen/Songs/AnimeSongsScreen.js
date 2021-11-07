import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Card,  Button} from 'react-bootstrap'
import { useParams } from 'react-router';


export const AnimeSongsScreen = (props) => {
    
    const [episo, setEpiso] = useState([])


    useEffect(() => {
        getListEpisode()
        //eslint-disable-next-line
    }, []);

    const {id} = useParams();
    

    const getListEpisode = async () => {

        try{
            const url = `https://api.aniapi.com/v1/anime/${id}`;
            const response = await fetch(url);
            const { data } = await response.json();
            console.log(data);

            
            const episodes = 
                 {
                    id: data.anime_id,
                    title: data.titles.en,
                    image: data.cover_image
                }
            
            setEpiso(episodes)
            console.log(episodes);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <>
            
                
                            <Card style={{ width: '250px', marginLeft:'110px',marginTop:'30px' }}>
                            <Card.Img variant="top" src={episo.image} />
                                <Card.Body>
                                    <Card.Title style={{ color:'lightcoral' }}>{episo.title}</Card.Title>
                                    <Card.Text style={{ color:'lightcoral' }}></Card.Text>
                                    <Button variant="white" as={Link} to={`/ver/${props.idSo}`}>ver anime</Button>
                                </Card.Body>
                        </Card>
                      
        </>
    )
}


