import React from 'react';
import {Switch, Route} from 'react-router-dom';

import WebDevelopment from './Components/WebDev';
import Blog from './Components/Blog';

export default(
  <Switch>
    <Route exact path='/' component={WebDevelopment}/>
    <Route path ='/blog' component={Blog}/>
  </Switch>
)
