import React from "react"
import { useEffect, useState } from "react";
import MainPage from "./Components/MainPage"
import DetailPage from "./Components/DetailPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





//Khúc này mọi người install router vô rồi xem lại video của Tuấn nhé. Dưới đây đại khái vậy thôi.
const App = () => {
  
  
  return (
    <>
    
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
