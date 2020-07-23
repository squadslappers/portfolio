import React from 'react';
import {Switch, Route} from 'react-router-dom';

import WebDevelopment from './Components/WebDev';
import SimplifyJS from './Components/SimplifyJS/SimplifyJS';

export default(
  <Switch>
    <Route exact path='/' component={WebDevelopment}/>
    <Route path = '/blog/simplify-javascript' component = {SimplifyJS}/>
  </Switch>
)
