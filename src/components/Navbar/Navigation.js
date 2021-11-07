import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../../styles/components/navigation.css'

export const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Anime App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/directorio/anime">Directorio</Nav.Link>
                            <Nav.Link as={Link} to="/directorio/song">Songs</Nav.Link>
                           {
                               /*
                            <Form className="d-flex">
                                <FormControl type="search" placeholder="Search" className="mr-5" aria-label="Search"/>
                                <Button variant="outline-light" type="submit">Search</Button>
                            </Form>
                               */
                           } 
                        </Nav>
                        {/* <Nav>
                            <Nav.Link as={Link} to="/auth/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/auth/register">Register</Nav.Link>
                        </Nav>*/}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
