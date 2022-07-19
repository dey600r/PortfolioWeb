

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Details from "./pages/details";
import Constants from "./core/constants";

function App() {
  

  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path={Constants.routes.root} component={Home} />
            <Route exact path={Constants.routes.home} component={Home} />
            <Route exact path={Constants.routes.details} component={Details} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
