

// REACT
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import './App.css';
import Home from './pages/home';
import Details from "./pages/details";
import Header from './shared/common/header';
import Footer from './shared/common/footer';
import Constants from "./core/constants";

function App() {

  return (
    <React.Fragment>
      <Router basename={Constants.paths.base}>
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
