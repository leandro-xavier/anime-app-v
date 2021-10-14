import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardMovie } from '../../Cards/CardMovie';
import { CardSongs } from '../../Cards/CardSongs';
import { CardBestAnime } from '../../Cards/CardBestAnime'
import { Navigation } from '../../Navbar/Navigation'

export const HomeScreen = (props) => {

    const [old, setOld] = useState({})
    
    useEffect(() => {
        getAnimeRetro()
    }, [])

   
    const getAnimeRetro = async() => {
        const url = `https://api.aniapi.com/v1/anime/22`;
        const response = await fetch(url);
        const {data} = await response.json()

        const anime = {
                id : data.id,
                titleEsp : data.titles.en,
                titleJap : data.titles.jp,
                description: data.description,
                score: data.score,
                cover: data.cover_image,
                banner: data.banner_image
            }
        

        setOld(anime)
        console.log(anime);
    }
  
    return (
        <>
           <div style={{backgroundColor:'black'}}>
               <Navigation/>
                        <div> 
                            <Card className="bg-dark text-white">
                                <Card.Img src={old.banner} alt="Card image" />
                                    <Card.ImgOverlay>
                                    <Card.Title style={{paddingTop: '20px', width:'600px'}}><h1 style={{backgroundColor:'white', color:'black', borderRadius:'30px', textAlign:'center'}}>{old.titleEsp}</h1></Card.Title>
                                    <Card.Text style={{paddingTop: '50px', width:'410px'}}><h3 style={{backgroundColor:'white', color:'black',borderRadius:'30px', textAlign:'center'}} >Puntuacion: {old.score}</h3></Card.Text>
                                    </Card.ImgOverlay>
                                 
                            </Card>
                        </div>
      
               <div>
              {/* <CardAnime/> */} 
               </div>
               <div>
                   <div style={{float:'right'}}>
                       <h1 style={{textAlign:'center', marginTop:'40px', paddingBottom:'15px', color:'white'}}>Peliculas canceladas</h1>
                   <CardMovie/>
                   </div>
                   
               </div>

            <div >
                <aside style={{alignItems:'left', float:'left'}}>
                   <h1  style={{textAlign:'left', marginTop:'40px', paddingBottom:'15px',color:'white'}}>Canciones del anime 2021</h1>
                  <CardSongs/>
               </aside>
            </div>
             


               <div style={{float:'right' }}>
                   <h1 style={{ textAlign:'center', marginTop:'100px', paddingBottom:'30px',color:'white'}}>mejores animes 2021</h1>
                   <CardBestAnime/>
               </div>
           </div>
        </>
    )
}
