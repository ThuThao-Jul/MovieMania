

import React, { useState } from 'react'
import { Navbar, Container, Nav, InputGroup, FormControl, Button } from 'react-bootstrap'
import './style.css'

const SearchBox = ({setQuery, handleCategory}) => {
    
    //set input from user
    const [input, setInput] = useState('');
    const handleInputChange = (event) => {

        event.preventDefault();
        setInput(event.target.value)

    };
    const confirmSearch= () => {
        setQuery(input)
    };


    return (
        <>
    <Navbar bg="dark" variant="dark" className="navbar-search">
        <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onSelect = {handleCategory}  eventKey ="comedy">Comedy</Nav.Link>
                <Nav.Link onSelect = {handleCategory}  eventKey ="romantic">Romantic</Nav.Link>
                <Nav.Link onSelect = {handleCategory}  eventKey ="action">Action</Nav.Link>
            </Nav>
        </Container>

        <InputGroup className="mb-3">
            <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={input}
                onChange={handleInputChange}
            />
            <Button onClick={confirmSearch} variant="outline-secondary" id="button-addon2">
                Search 
            </Button>
        </InputGroup>
    </Navbar>
        </>
    )
}

export default SearchBox
