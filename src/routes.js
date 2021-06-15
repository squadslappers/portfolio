import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import WebDevelopment from './Components/WebDev';
import Home from './Components/NewPortfolio/Home';
import SoftwareEngineering from './Components/NewPortfolio/SoftwareEngineering';
import RacialApplications from './Components/Blog/BlogPosts/RacialApplications';
import SuckAtCoding from './Components/Blog/BlogPosts/SuckAtCoding';
import GetAJob from './Components/Blog/BlogPosts/GetAJob';
import Blog from './Components/Blog/Blog';

export default(
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/software-engineering' component={SoftwareEngineering}/>
    <Route exact path='/blog/racial-applications' component = {RacialApplications}/>
    <Route exact path='/blog/how-to-suck-at-coding' component = {SuckAtCoding}/>
    <Route exact path='/blog/3-tips-to-land-your-next-coding-job' component = {GetAJob}/>
    <Route exact path='/blog' component = {Blog}/>
  </Switch>
)
