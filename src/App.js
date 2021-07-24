import React from "react"
import { useEffect, useState } from "react";
import MainPage from "./Components/MainPage"
import DetailPage from "./Components/DetailPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBox from "./Components/SearchBox/index.js";
import Footer from "./Components/Footer";





//Khúc này mọi người install router vô rồi xem lại video của Tuấn nhé. Dưới đây đại khái vậy thôi.
const App = () => {

    //lifting state from SearchBox
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');


  useEffect(() => {
     
    const getData = async () => {
      
      let myKey = process.env.REACT_APP_API_KEY;
      let url
      let defaultUrl = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=action&include_adult=false`;
      
        if(query) {
            //movie fillter from 'query' 
            url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${query}&include_adult=false`
        } else if (category) {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${category}&include_adult=false`
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

}, [query, category]);

  const handleCategory = (eventKey, event) => {
    setCategory(eventKey);
  }

  
  return (
    <>

     <Router>
     <SearchBox setQuery={setQuery} handleCategory={handleCategory}/>
       <Switch>
         <Route path="/" exact component= {()=> <MainPage data={data} category={category} /> } />
         <Route path="/:id" component={DetailPage} />
        </Switch>
      <Footer/>  
     </Router>

    
    </>
  )
}
export default App;
