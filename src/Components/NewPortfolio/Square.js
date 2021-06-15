import React from 'react';
import {Link} from 'react-router-dom';

const Square = props => {

// ===== ===== DATA BEG ===== =====
  
  let link = props.title.split(' ').join('-');
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  
  
// ===== ===== 'COMPONENTS' END ===== =====

return <Link to={link}><div className='square'>
  <div className='square_image_background'>
    <img className='square_image' src={props.src} alt={props.alt}/>
  </div>

  <span className='square_title'>{props.title}</span>
</div></Link>
}

export default Square;