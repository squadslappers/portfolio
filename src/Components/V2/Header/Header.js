import React from 'react';

const Header = (props) => {
    return(<div id='header2'>
        <div className='header-icon' id='hamburger'/>
        <h2>{props.title}</h2>
        <div className='header-icon'/>
    </div>)
}

export default Header;
