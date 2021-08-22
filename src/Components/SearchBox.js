<<<<<<< HEAD
import React, { useState } from 'react'
import { Navbar, Container, Nav, InputGroup, FormControl, Button, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


const SearchBox = () => {
  
  
  const history = useHistory();


    //set input from user
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        event.preventDefault();
        setInput(event.target.value)
    };
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        history.push(`/search/${e.target.name}`)
    }
=======
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";

const SearchBox = () => {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const handleCategory = (eventKey, event) => {
    setCategory(eventKey);
  };

  //set input from user
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
>>>>>>> f319a83cd6bdd0019893dcb44153b99b74a48530

  const confirmSearch = () => {
    setQuery(input);
  };
  console.log(category, query, handleCategory);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar-search">
        <Container>
<<<<<<< HEAD
            <Image src="https://media.discordapp.net/attachments/867985632675389490/868910854085677106/logo.png" style={{width:"9rem", marginRight:"1rem"}} alt="logo" />
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link eventKey ="comedy" name="comedy" onClick={handleSearch}>Comedy</Nav.Link>
                <Nav.Link eventKey ="romantic" name="romantic" onClick={handleSearch}>Romantic</Nav.Link>
                <Nav.Link eventKey ="action"  name="action" onClick={handleSearch}>Action</Nav.Link>
            </Nav>
        </Container>

        <InputGroup className="mb-3">
            <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={input}
                onChange={handleInputChange}
            />
            <Button variant="outline-secondary" id="button-addon2" href = {`/search/${input}`}>
                Search 
            </Button>
=======
          <Image
            src="https://media.discordapp.net/attachments/867985632675389490/868910854085677106/logo.png"
            style={{ width: "9rem", marginRight: "1rem" }}
            alt="logo"
          />
          <Navbar.Brand href="./">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./search/Comedy" eventKey="comedy">
              Comedy
            </Nav.Link>
            <Nav.Link href="./search/Romantic" eventKey="romantic">
              Romantic
            </Nav.Link>
            <Nav.Link href="./search/Action" eventKey="action">
              Action
            </Nav.Link>
          </Nav>
        </Container>

        <InputGroup className="mb-3">
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={input}
            onChange={handleInputChange}
          />
          <Button
            onClick={confirmSearch}
            variant="outline-secondary"
            id="button-addon2"
            href={`/search/${input}`}
          >
            Search
          </Button>
>>>>>>> f319a83cd6bdd0019893dcb44153b99b74a48530
        </InputGroup>
      </Navbar>
    </>
  );
};

export default SearchBox;
