import React from 'react';
import './styles/style.css';
import {withRouter} from 'react-router-dom';
import routes from './routes';

function App(props) {
return (
    <div className="App">
        {routes}
    </div>
);
}

export default withRouter(App);
