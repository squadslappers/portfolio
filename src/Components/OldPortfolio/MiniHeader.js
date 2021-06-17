import React from 'react';

// const MiniHeaderPic = require('./MiniHeaderPic.png');

const MiniHeader = (props) => {
  return (<div className='mini-header'>
    <h1>{props.title}</h1>
  </div>);
}
export default MiniHeader;
