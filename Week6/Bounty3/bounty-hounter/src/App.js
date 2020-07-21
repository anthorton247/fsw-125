import React from 'react';
import {Switch, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import BountyPage from "./Components/BountyPage"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

function App() {

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path= "/bounties">
          <BountyPage />
        </Route>
        <Route path= "/about">
          <About />
        </Route>
        <Route to= "/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
