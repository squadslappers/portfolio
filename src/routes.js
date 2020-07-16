import React from 'react';
import {Switch, Route} from 'react-router-dom';

import WebDevelopment from './Components/WebDev';
import TestBlog from './Components/TestBlog';

export default(
  <Switch>
    <Route exact path='/' component={WebDevelopment}/>
    <Route path = '/test-blog' component = {TestBlog}/>
  </Switch>
)
