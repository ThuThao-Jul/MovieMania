import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, InputGroup, FormControl, Button, Image } from 'react-bootstrap'

const myKey = process.env.REACT_APP_API_KEY;
const SearchBox = () => {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  



  const handleCategory = (eventKey, event) => {
    setCategory(eventKey);
  }

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
            <Image src="https://media.discordapp.net/attachments/867985632675389490/868910854085677106/logo.png" style={{width:"9rem", marginRight:"1rem"}} alt="logo" />
            <Navbar.Brand href="./">Home</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="./search/Comedy" eventKey ="comedy">Comedy</Nav.Link>
                <Nav.Link href="./search/Romantic"  eventKey ="romantic">Romantic</Nav.Link>
                <Nav.Link href="./search/Action"  eventKey ="action">Action</Nav.Link>
            </Nav>
        </Container>

        <InputGroup className="mb-3">
            <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={input}
                onChange={handleInputChange}
            />
            <Button onClick={confirmSearch} variant="outline-secondary" id="button-addon2" href = {`/search/${input}`}>
                Search 
            </Button>
        </InputGroup>
    </Navbar>
        </>
    )
}

export default SearchBox