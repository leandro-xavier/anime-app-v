import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardMovie } from '../../Cards/CardMovie';
import { CardSongs } from '../../Cards/CardSongs';
import { CardBestAnime } from '../../Cards/CardBestAnime';



export const HomeScreen = ({...props}) => {

    const [old, setOld] = useState([])
    
    useEffect(() => {
        getAnimeRetro()
    }, [])

   
    const getAnimeRetro = async() => {
        const url = `https://api.aniapi.com/v1/random/anime/1/true`;
        const response = await fetch(url);
        const {data} = await response.json()

        const anime = data.map(resp => {
            return {
                id : resp.id,
                titleEsp : resp.titles.en,
                description: resp.description,
                score: resp.score,
                cover: resp.cover_image,
            }
        })
        setOld(anime)
    }
  
    return (
        <>
            {old.map(dat => (
                            <Card className="bg-dark text-white">
                                <Card.Img src={dat.cover} alt="Card image" style={{width:"90%", height: "500px"}}/>
                                    <Card.ImgOverlay>
                                    <Card.Title style={{paddingTop: '20px', width:'600px'}}>{dat.titleEsp}</Card.Title>
                                    <Card.Text style={{paddingTop: '50px', width:'410px'}}>Puntuacion: {dat.score}</Card.Text>
                                    </Card.ImgOverlay>
                                 
                            </Card>
                ))
            }
                        
                
                   <div style={{float:'right'}}>
                       <h1 style={{textAlign:'center', marginTop:'40px', paddingBottom:'15px', color:'white'}}>Peliculas canceladas</h1>
                   <CardMovie/>
                   </div>
            
                <aside style={{alignItems:'left', float:'left'}}>
                   <h1  style={{textAlign:'left', marginTop:'40px', paddingBottom:'15px',color:'white'}}>Canciones del anime 2021</h1>
                  <CardSongs/>
               </aside>

               <div style={{float:'right' }}>
                   <h1 style={{ textAlign:'center', marginTop:'100px', paddingBottom:'30px',color:'white'}}>mejores animes 2021</h1>
                   <CardBestAnime/>
               </div>
           
    
           
           </>
    )
}
