import React from 'react';

const MiniHeaderPic = require('./MiniHeaderPic.png');

const MiniHeader = (props) => {
  return (<div id='main-div'>
    <div id='mini-header2'>
      <h1>HI, I'M JAKE AND I'M A {props.title}</h1>
    </div>
  </div>);
}
export default MiniHeader;
