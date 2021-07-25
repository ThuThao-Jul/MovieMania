

import React, {useEffect, useState} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import SearchBox from '../SearchBox/index.js';
import './style.css';


const SearchPage = () => {
    const [data, setData] = useState('');
    const {keyword} = useParams()
    console.log(keyword)

    useEffect(() => {
     
        const getData = async () => {
          
          let myKey = process.env.REACT_APP_API_KEY;
          let url
          let defaultUrl = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=action&include_adult=false`;
          
            if(keyword) {
                //movie fillter from 'query' 
                url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${keyword}&include_adult=false`
            } 
            else {
                // the movie when have no seach action
                url = defaultUrl;
            }
    
    
            const data = await fetch(url);
            const result = await data.json();
            // console.log('Im App I received data when user seached',result);
            setData(result);
    
        }
        getData()
    
    }, [keyword]);

    // console.log(data);
    let result = data.results
    console.log(result)
    return (
        <>
        <SearchBox/>
        {result!==undefined&&result.map(el => {

            return (


                <Card style={{ width: '20rem' }} className="Card-Render">
                <Card.Img variant="top" src="https://yaviet.com/wp-content/uploads/2018/08/loi-404-not-found-300x225.jpg" />
                <Card.Body>
                  <Card.Title> {el.title} </Card.Title>
                  <Card.Text>
                  {el.overview}
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>

          )
            
        }) }
        </>
    )
}

export default SearchPage
