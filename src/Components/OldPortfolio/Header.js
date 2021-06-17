import React from 'react';

import Squidslippers from '../styles/images/Squidslippers.png';

const Header = (props) => {
    return(<div id='header2'>
        <img className='header-icon' src={Squidslippers} alt={props.alt}/>
        <header>{props.title}</header>
        <nav>
          {/* <a href="about">About</a>
          <a href="skills">Skills</a> */}
        </nav>
    </div>)
}

export default Header;
