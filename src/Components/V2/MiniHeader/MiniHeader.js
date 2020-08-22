import React from 'react';

const MiniHeaderPic = require('./MiniHeaderPic.png');

const MiniHeader = (props) => {
  return (<div id='main-div'>
    <div id='mini-header2'>
      <img src={MiniHeaderPic} alt='me' id='mini-header-pic'/>
      <h1>HI, I'M JAKE AND I'M A <span id='mini-header-title'>{props.title}</span></h1>
    </div>
  </div>);
}
export default MiniHeader;
