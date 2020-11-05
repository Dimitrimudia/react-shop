import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import RegisterForm from './components/register';
import Dashboard from './components/dashboard';
import ErrorPage from './components/ErroPage';

function App() {

  return (
    <div> 
      <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="/#" className="header item">
                  Ujicha 
                </a>
            </div>
      </div>
      <div className="ui main container">
          <Router>
            <Switch>
              <Route path ="/" exact component={Login} />
              <Route path ="/Register" exact component={RegisterForm} />
              <Route path ="/Home" exact component={Home} />
              <Route path ="/Dashboard" exact component={Dashboard} />
              <Route path ="/Error" exact component={ErrorPage} />
            </Switch>
          </Router>
         
      </div>
    </div>
  );
}

export default App;
