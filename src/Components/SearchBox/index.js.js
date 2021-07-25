

import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './style.css'

const SearchBox = () => {
    
    //set input from user
    const [category, setCategory] = useState('');
    const [query, setQuery] = useState('');
    const [data, setData] = useState('');
    const [input, setInput] = useState('');
    console.log(data);
    
//   useEffect(() => {
     
//     const getData = async () => {
      
//       let myKey = process.env.REACT_APP_API_KEY;
//       let url
//       let defaultUrl = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=action&include_adult=false`;
      
//         if(query) {
//             //movie fillter from 'query' 
//             url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${query}&include_adult=false`
//         } else if (category) {
//             url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${category}&include_adult=false`
//         }
//         else {
//             // the movie when have no seach action
//             url = defaultUrl;
//         }


//         const data = await fetch(url);
//         const result = await data.json();
//         // console.log('Im App I received data when user seached',result);
//         setData(result);

//     }
//     getData()

// }, [query, category]);

  const handleCategory = (eventKey, event) => {
    setCategory(eventKey);
  }

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
            <Navbar.Brand as = {Link} to="/">Home</Navbar.Brand>
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
            <Button as = {Link} to={`/search/${input}`} onClick={confirmSearch} variant="outline-secondary" id="button-addon2">
                Search 
            </Button>
        </InputGroup>
    </Navbar>
        </>
    )
}

export default SearchBox
