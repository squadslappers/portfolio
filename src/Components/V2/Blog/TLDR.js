import React from 'react';

const TLDR = (props) => {
  return (<div className='tldr'>
    <h2>Too Long; Didn't Read</h2>
    <p>{props.tldr}</p>
  </div>)
}
export default TLDR;
