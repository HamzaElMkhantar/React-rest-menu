import React , { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import myLogo from '../images/Logo.png'

export const NavBar = ({fitreBySearch}) => {

    const [ searchValue , setSearchValue ] = useState('')

    const onChange = () => {
        fitreBySearch(searchValue)
        setSearchValue('')
    }

  return (
    
    <row>
        <Navbar variant='dark' bg="dark" expand="lg">
            <Container >
                <Navbar.Brand href="#">
                   <img className='logoItemImage' src={myLogo} />
                   <h3 className='logoItemDesc'>Food &#38; Coffee</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"

                            onChange={ (e) => setSearchValue(e.target.value) }
                            value={searchValue} />
                        <Button onClick={ () => onChange()} className='searchBtn'>Search</Button>
                    </Form>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    </row>
    
  )
}
