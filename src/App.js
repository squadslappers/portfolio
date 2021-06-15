import React from 'react';
import './styles/style.css';
import {withRouter} from 'react-router-dom';
import routes from './routes';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/NewPortfolio/Header';

function App() {
return (
  <div className="App">
  <Header/>
  <ScrollToTop/>
        {routes}
    </div>
);
}

export default withRouter(App);
