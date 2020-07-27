import React from 'react';
import {Switch, Route} from 'react-router-dom';

import WebDevelopment from './Components/WebDev';
import SimplifyJS from './Components/SimplifyJS/SimplifyJS';
import TestSoftEng from './Components/Test/TestSoftEng';

export default(
  <Switch>
    <Route exact path='/' component={WebDevelopment}/>
    <Route path = '/blog/simplify-javascript' component = {SimplifyJS}/>
    <Route path = '/test-soft-eng' component = {TestSoftEng}/>
  </Switch>
)
