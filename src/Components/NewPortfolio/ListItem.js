import React, { useState } from 'react';

import Caret from '../../styles/NewPortfolio/assets/Icons/Caret.png';

const ListItem = props => {

// ===== ===== DATA BEG ===== =====
  
  const [showDetails, setShowDetails] = useState(false);
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  let details, active;
  if (showDetails && props.details) {
    details = <div className='list-item_details'>
      {props.details}
    </div>
    active = 'active_caret'
  }
  
// ===== ===== 'COMPONENTS' END ===== =====

return <div className='list-item' onClick={() => setShowDetails(showDetails ? false : true)}>
  <div className='list-item_main'>
    <div className='list-item_main_info'>
      <div className='list-item_image_background'>
        <img className='list-item_image' src={props.src} alt={props.alt}/>
      </div>

      <span>{props.title}</span>
    </div>

    <img className={'list-item_caret' + ' ' + active} src={Caret} alt={'caret'}/>
  </div>

  {details}
</div>
}

export default ListItem;