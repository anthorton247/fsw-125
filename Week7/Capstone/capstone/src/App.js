import React from 'react';
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import WorkerPage from "./Components/WorkePage"
import Contact from "./Components/Contact"
import Nav from "./Components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path= "/workers">
          <WorkerPage />
        </Route>
        <Route path= "/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
