import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';


export const DirectorioSongScreen = ({cover_image}) => {
    const initialState = 1
    const [comic, setComic] = useState([])
    const [page, setPage] = useState(initialState)

    useEffect(() => {
        getAllSongs()
    }, [page, setPage])

    const limit = 24

    const getAllSongs = async() => {
    const url = `https://api.aniapi.com/v1/song?page=${page}&per_page=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json()
   
 const songs = data.documents.map(ani => {
        return {
            id: ani.id,
            id_ani: ani.anime_id,
            title: ani.title,
            artist: ani.artist,
            album: ani.album,
            url_song_online: ani.open_spotify_url,
            url_song_local: ani.local_spotify_url,
            year: ani.year,
            season: ani.season
        }
    })  
    setComic(songs)
}

const handleNextPage = () => {
    if(page >= 220) {
       console.log('la ultima pagina es 719');
    }else{
        setPage(nextPage => nextPage + 1)
    }
    
}

const handlePreviusPage = () => {
    if(page <= 1){
        console.log(' es menor a 1');
    }else{
        setPage(prevPage => prevPage - 1)
    }
        
}

    return (
        <>
    
        {
            comic.map(son => (
                <div>
                            <Card key={son.id} bg="dark" style={{margin:'12px',width: '200px', height:'250px', float: 'right' }} className="mb-2">
                            <Card.Header className="text-white"> <span style={{color:'goldenrod'}}>Autor:</span> {son.artist}</Card.Header>
                            <Card.Body>
                            <Card.Title className="text-white"> {son.title} </Card.Title>
                            <Card.Text className="text-white">
                            {son.year}
                            </Card.Text>
                            <Button className="btn btn-light" as={Link} to={`/ver/song/${son.id}`}>ver cancion</Button>
                            </Card.Body>
                            </Card>
  
                </div>
            ))
        }
              <Button style={{margin: '200px'}} variant='danger' onClick={handlePreviusPage}>previus  page</Button>
             <Button style={{margin: '200px'}} variant='danger' onClick={handleNextPage}>next page</Button>
        </>
    )
}
