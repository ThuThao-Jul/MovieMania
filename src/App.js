import React from "react"
import { useEffect, useState } from "react";
import MainPage from "./Components/MainPage"
import DetailPage from "./Components/DetailPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBox from "./Components/SearchBox/index.js";





//Khúc này mọi người install router vô rồi xem lại video của Tuấn nhé. Dưới đây đại khái vậy thôi.
const App = () => {

  //lifting state from SearchBox
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');


  useEffect(() => {
     
    const getData = async () => {
        let url 
        if(query) {
            //movie fillter from 'query' 
            url = `https://newsapi.org/v2/everything?q=${query}&apiKey=698e41aa0a824f15b275f3a51812306c`
        }else {
            // the movie when have no seach action
            url = `https://api.themoviedb.org/3/trending/all/day?api_key=362678850053d11fdeca26d50399edd6`
        }

        const data = await fetch(url);
        const result = await data.json();
        console.log('Im App I received data when user seached',result);
        setData(result);

    }
    getData()

}, [query]);
  
  
  return (
    <>
     <SearchBox setQuery={setQuery}/>

     <MainPage data={data}/>
     <Router>
       <Switch>
         <Route path="/" exact component={MainPage} />
         <Route path="/:id" component={DetailPage} />
        </Switch>
     </Router>
    
    </>
  )
}

export default App;
