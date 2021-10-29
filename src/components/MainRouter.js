import React from 'react'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { test0  } from '../actions/challenge';
import { Login } from './auth/Login';
import { Register } from './auth/Register';

import { Personas } from './socios/Personas';

export const MainRouter = () => {
  const dispach = useDispatch();
  dispach(test0());
  return (
    <Router>
    <div >
    
      <Switch>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/" component={Personas}/>
        
       
      </Switch>
    </div>
  </Router>
  )
}
