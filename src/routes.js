import React from 'react';
import {Switch, Route} from 'react-router-dom';

import WebDevelopment from './Components/WebDev';

export default(
    <Switch>
        <Route exact path='/' component={WebDevelopment}/>
    </Switch>
)
