import React from 'react';
import {Link} from 'react-router-dom';

const TLDR = (props) => {
  return (<div id='tldr'>
    <h2>Too Long; Didn't Read</h2>
    <p>{props.tldr}</p>
    <Link to='/' id='tldr-link'>Visit My Portfolio</Link>
  </div>)
}
export default TLDR;
