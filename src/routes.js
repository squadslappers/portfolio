import React from 'react';
import {Switch, Route} from 'react-router-dom';

import WebDevelopment from './Components/WebDev';

export default(
    <Switch>
        <Route path='/web-development' component={WebDevelopment}/>
    </Switch>
)