import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
return <div className='header'>
  <Link to='/'><div className='header_logo_placeholder'/></Link>
</div>
}

export default Header;