import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import WebDevelopment from './Components/WebDev';
import SoftwareEngineer from './Components/V2/SoftwareEngineer/SoftwareEngineer'
import SimplifyJS from './Components/SimplifyJS/SimplifyJS';

export default(
  <Switch>
    <Route exact path='/' component={SoftwareEngineer}/>
    <Route path = '/blog/simplify-javascript' component = {SimplifyJS}/>
  </Switch>
)
