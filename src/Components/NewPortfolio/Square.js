import React from 'react';
import {Link} from 'react-router-dom';

import ComingSoon from '../../styles/NewPortfolio/assets/Icons/ComingSoon2.jpg';

const Square = props => {

// ===== ===== DATA BEG ===== =====
  
  let link = props.title.split(' ').join('-');
  let home = '/';

  let className, comingSoon, opacity;
  if (props.active) {
    className = 'square_active';
    opacity = '1'
  } else {
    className = 'square_inactive';
    opacity = '0.3';
    comingSoon = <img className='square_coming_soon' src={ComingSoon} alt='Coming Soon'/>
  }
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  
  
// ===== ===== 'COMPONENTS' END ===== =====

return <Link to={props.active ? link : home}><div className={'square' + ' ' + className}>
  <div className='square_image_background' style={{opacity: opacity, cursor: 'initial'}}>
    <img className='square_image' src={props.src} alt={props.alt}/>
  </div>

  <span className='square_title' style={{opacity: opacity}}>{props.title}</span>

  {comingSoon}
</div></Link>
}

export default Square;