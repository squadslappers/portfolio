import React from 'react';

const ExtraInfo = (props) => {
  return (<div className='extra-info-outer'>
    <div className='extra-info-inner'>
      {props.info}
      <div className='x'>X</div>
    </div>
  </div>)
}
export default ExtraInfo;
