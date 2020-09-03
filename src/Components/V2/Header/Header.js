import React from 'react';

import Squidslippers from '../Images/Squidslippers.png';

const Header = (props) => {
    return(<div id='header2'>
        <img className='header-icon' src={Squidslippers}/>
        <header>{props.title}</header>
        <div className='header-icon'/>
    </div>)
}

export default Header;
