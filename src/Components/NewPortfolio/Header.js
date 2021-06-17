import React from 'react';
import {Link} from 'react-router-dom';

import Squidslippers from '../../styles/NewPortfolio/assets/Logos/Squidslippers.png';

const Header = props => {
  return <Link to='/'>
    <div className='header'>
      <img className='header_logo' src={Squidslippers} alt='Squidslippers Logo'/>
      <span style={{color: 'white', marginLeft: '15px', fontWeight: 'bold'}}>squidslippers</span>
    </div>
  </Link>
}

export default Header;