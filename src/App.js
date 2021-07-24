import React from "react";

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Khúc này mọi người install router vô rồi xem lại video của Tuấn nhé. Dưới đây đại khái vậy thôi.
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/movie/:id" component={DetailPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
