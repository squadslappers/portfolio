import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import WebDevelopment from './Components/WebDev';
import SoftwareEngineer from './Components/V2/SoftwareEngineer/SoftwareEngineer'
import SimplifyJS from './Components/SimplifyJS/SimplifyJS';
import RacialApplications from './Components/V2/Blog/RacialApplications';

export default(
  <Switch>
    <Route exact path='/' component={SoftwareEngineer}/>
    <Route exact path='/blog/simplify-javascript' component = {SimplifyJS}/>
    <Route exact path='/blog/racial-applications' component = {RacialApplications}/>
  </Switch>
)
