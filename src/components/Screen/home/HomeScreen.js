import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardMovie } from '../../Cards/CardMovie';
import { CardSongs } from '../../Cards/CardSongs';
import { CardBestAnime } from '../../Cards/CardBestAnime';
import './homeStyle.css'
import { removeTags } from '../../../helpers/entidadesConvert';


export const HomeScreen = ({...props}) => {

    const [old, setOld] = useState([])
    
    useEffect(() => {
        getAnimeRetro()
    }, [])

   
    const getAnimeRetro = async() => {
        //const url = `https://api.aniapi.com/v1/random/anime/1/true`;
        const url = `https://api.jikan.moe/v4/random/anime`;
        const response = await fetch(url);
        const {data} = await response.json()

        //const anime = data.map(resp => {
           // return {
          //      id : resp.id,
        //     titleEsp : resp.titles.en,
         //       description: resp.descriptions.en,
        //        score: resp.score,
       //         cover: resp.cover_image,
      //      }
      //  })

        const anime = {
                id : data.mal_id,
                titleEsp : data.title,
                description: data.synopsis,
                score: data.score,
                cover: data.images.jpg.image_url
        }
        setOld(anime)
    }
  
    return (
        <>
    
                <div className="bg-dark text-white" style={{ width:'100%', height:'500px', display:'flex'}}>
                    <Card style={{width:'60%'}} className="bg-dark text-white">
                                <Card.Img src={old.cover} alt="Card image" style={{ margin:'auto', width:"35%", height: "400px"}}/>
                                    <Card.ImgOverlay>
                                    <Card.Title style={{paddingTop: '20px', width:'20%'}}>{old.titleEsp}</Card.Title>
                                    <Card.Text style={{paddingTop: '50px', width:'410px'}}>Puntuacion: {old.score}</Card.Text>
                                    <Card.Text style={{paddingTop: '50px', width:'200px'}}>{old.description <= 500 ?  removeTags(old.description) : <h2>Que va hermano la descripcion es muy larga mejor ve el anime</h2>}</Card.Text>
                                    </Card.ImgOverlay>
                    </Card>
                    <div style={{backgroundColor:'black',  width:'30%',height: "400px", float:'right', margin:'auto'}}>
                            <h1 style={{textAlign:'center',  marginTop:'20px'}}>Bienvenido a Anime App</h1>
                            <p style={{textAlign:'center', marginTop:'40px'}}>Aplicación en la cual puedes buscar tu anime favorito, la canción de tu anime preferido</p>
                    </div>
                  
                </div>
              
            
                
                   <div style={{float:'right'}}>
                       <h1 style={{textAlign:'center', marginTop:'40px', paddingBottom:'15px', color:'white'}}>Top mejor rank anime</h1>
                   <CardMovie/>
                   </div>
            
                <aside style={{alignItems:'left', float:'left'}}>
                   <h1  style={{textAlign:'left', marginTop:'40px', paddingBottom:'15px',color:'white'}}>Proximos estrenoos</h1>
                  <CardSongs/>
               </aside>

               <div style={{float:'right' }}>
                   <h1 style={{ textAlign:'center', marginTop:'100px', paddingBottom:'30px',color:'white'}}>Animes de la temporada</h1>
                   <CardBestAnime/>
               </div>
           
    
           
           </>
    )
}
