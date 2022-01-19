import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Button, Form, FormControl} from 'react-bootstrap';
import { useForm } from '../../../hooks/useForm';


export const DirectorioSongScreen = ({cover_image}) => {
    const initialState = 1
    const [comic, setComic] = useState([])
    const [page, setPage] = useState(initialState)
    const [search, setSearch] = useState(''); 

    const [curent, setCurent] = useState(1);

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    })

    const {searchText} = formValues

    useEffect(() => {
        getAllSongs()
    }, [page, setPage,search, setCurent])

    const limit = 24

    const getAllSongs = async() => {
    const url = `https://api.aniapi.com/v1/song?title=${search}&page=${page}&per_page=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json()

    const current = data.last_page
   
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
    setCurent(current)
}

const handleSubmit = (e) => {
    e.preventDefault()
   // console.log(formValues);
    setSearch(searchText)
}

const handleNextPage = () => {
    if(page >= curent) {
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
         <div className="mx-auto d-inline text-danger">
            <h1 >Buscar tu cancion de anime favorita</h1>
        </div>
       <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="m-4"
          aria-label="Search"
          name='searchText'
          autoComplete='off'
            value={searchText}
            onChange={handleInputChange}
        />
        <Button type='submit' variant="outline-danger" className="m-4 ">Search</Button>
      </Form>
    
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
