import React from "react";
import MainPage from "./Components/MainPage";
import DetailPage from "./pages/DetailPage";
import ResultPage from "./pages/ResultPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Khúc này mọi người install router vô rồi xem lại video của Tuấn nhé. Dưới đây đại khái vậy thôi.
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/movie/:id" component={DetailPage} />
          <Route path="/search/:query" component={ResultPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
