import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import WebDevelopment from './Components/WebDev';
import SoftwareEngineer from './Components/V2/SoftwareEngineer/SoftwareEngineer'
import SimplifyJS from './Components/SimplifyJS/SimplifyJS';
import RacialApplications from './Components/V2/Blog/BlogPosts/RacialApplications';
import SuckAtCoding from './Components/V2/Blog/BlogPosts/SuckAtCoding';
import GetAJob from './Components/V2/Blog/BlogPosts/GetAJob';
import Blog from './Components/V2/Blog/Blog';

export default(
  <Switch>
    <Route exact path='/' component={SoftwareEngineer}/>
    <Route exact path='/blog/simplify-javascript' component = {SimplifyJS}/>
    <Route exact path='/blog/racial-applications' component = {RacialApplications}/>
    <Route exact path='/blog/how-to-suck-at-coding' component = {SuckAtCoding}/>
    <Route exact path='/blog/3-tips-to-land-your-next-coding-job' component = {GetAJob}/>
    <Route exact path='/blog' component = {Blog}/>
  </Switch>
)
