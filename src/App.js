import React from 'react';
import './App.css';

import {Home} from './components/Home'
import {Department} from './components/Meal'
import {Employee} from './components/Assign'
import {Navigation} from './components/Navigation'



import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      
      <h3 className="m-3 d-flex justify-content-center">
      Tread App Trainer Dashboard</h3>
      <h5 className="m-3 d-flex justify-content-center">
      Client Management Portal</h5>

      <Navigation/>

      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/department' component={Department}/>
      <Route path='/employee' component={Employee}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
