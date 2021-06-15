import React from 'react';

import ListItem from './ListItem';

const Example = props => {

// ===== ===== DATA BEG ===== =====
  
  
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  
  
// ===== ===== 'COMPONENTS' END ===== =====

return <div className='example'>
  
  <div className='example_header'>
    <div className='example_placeholder'/>
    <h2 className='example_title'>{props.title.toUpperCase()}</h2>

    <a className='example_link'>SEE IT LIVE</a>
  </div>

  <div className='example_container'>
    <div className='example_info'>
      <h3>Contributions</h3>
      {props.data['contributions'].map(element => {
        return <ListItem src={element.src} alt={element.alt} title={element.title}/>
      })}
    </div>

    <div className='example_info'>
      <h3>Languages & Technologies</h3>
      {props.data['langTech'].map(element => {
        return <ListItem src={element.src} alt={element.alt} title={element.title}/>
      })}
    </div>
  </div>
  
</div>
}

export default Example;