import React,{useEffect, useState} from 'react';
import {Card, Image, Button} from 'react-bootstrap'
import { useParams } from 'react-router';
import { TrailerScreen } from '../video/TrailerScreen';

export const ListScreen = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [episo, setEpiso] = useState([])


    useEffect(() => {
        getListEpisode()
        //eslint-disable-next-line
    }, []);

    const {id} = useParams();
    

    const getListEpisode = async () => {

        try{
            const url = `https://api.aniapi.com/v1/episode/?anime_id=${id}`;
            const response = await fetch(url);
            const { data } = await response.json();

            const episodes = data.documents.map( res => {
                return {
                    id: res.anime_id,
                    title: res.title,
                    chapter: res.number,
                    video: res.video,
                    id_ofi: res.id
                }
            })
            setEpiso(episodes)
            console.log(episodes);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <>
            <h4 style={{color:'goldenrod', marginTop:'30px'}}>Lista de episodios</h4>
                
                    {
                        episo.map(char => (
                            <Card key={char.id_ofi} style={{width:'60%', margin:'10px'}}>
                                <Card.Body>
                                    <Image style={{float: 'left', width:'150px', height:'100px'}} src={props.image} rounded />
                                    <Card.Title>{char.title}</Card.Title>
                                    <Card.Text>Capitulo:{char.chapter}</Card.Text>

                                    <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                                        ver trailer
                                    </Button>

                                    <TrailerScreen trailer={props.trailer} title={char.title} chapter={char.chapter} poster={props.image} video={char.video} show={modalShow} onHide={() => setModalShow(false)}/>
                                </Card.Body>
                            </Card>
                        ))
                    }     
        </>
    )
}


