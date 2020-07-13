import React, {createContext} from 'react';
import './styles/style.css';
import {withRouter} from 'react-router-dom';
import routes from './routes';

const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
}

export const themeContext = createContext(themes.dark);

function App() {
return (
    <div className="App">
      {/* <themeContext.Provider value={themes.dark}>
        <button style={{background: themes.background, color: themes.foreground}}>hi</button>
      </themeContext.Provider> */}
        {routes}
    </div>
);
}

export default withRouter(App);
