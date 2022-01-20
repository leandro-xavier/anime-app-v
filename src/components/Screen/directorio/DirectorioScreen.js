import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Button, Form, FormControl} from 'react-bootstrap';

import '../../../styles/screen/directorio.css'
import { useForm } from '../../../hooks/useForm';
import Swal from 'sweetalert2';

export const DirectorioScreen = ({cover_image}) => {

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
       getAllAnime()
    }, [page, setPage, search, setCurent])


    const limit = 20

    const getAllAnime = async () => {

    try {
        const url = `https://api.aniapi.com/v1/anime?title=${search}&page=${page}&per_page=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json()

    const current = data.last_page

    const anime = data.documents.map(ani => {
        return {
            id: ani.id,
            id_ani: ani.anilist_id,
            url: ani.cover_image,
            titles: ani.titles.en,
            year: ani.season_year
        }
    })  
    setComic(anime)
    setCurent(current)
        
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'no hay ningun anime con ese nombre',
          })
        console.log(error)
    }
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
        <div className="mx-auto d-inline text-light">
            <h1 style={{ margin:'auto', textAlign:'center'}}>Busca tu anime favorito</h1>
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
        <Button type='submit' variant="outline-light" className="m-4 ">Search</Button>
      </Form>
        {
            comic.map(goku => (
                <div style={{ display:'inline-block',alignItems:'center', marginLeft:"40px" }}>
                    
                        <Card key={goku.id} style={{ width: '200px', height:'500px', float:'left'}}>
                            <Card.Img  variant="top" src={goku.url} />
                            <Card.Body>
                                <Card.Title >{goku.titles}</Card.Title>
                                <Card.Footer>{goku.year}</Card.Footer>
                                <Button variant="btn btn-dark" as={Link} to={`/ver/${goku.id}`}>ver anime</Button>
                            </Card.Body>
                        </Card>
                </div>
            ))
        }
        <div style={{display:'inline-block', width:'100%'}} className='grid'>
            <div style={{ float:'left'}}>
            <Button style={{margin: '20px'}} variant='danger' onClick={handlePreviusPage} size='lg'>previus  page</Button>
            </div>
            <div style={{float:'right'}}>
            <Button style={{margin: '20px'}} variant='danger' onClick={handleNextPage} size='lg'>next page</Button>
            </div>
        </div>
            
        </>
    )
}
