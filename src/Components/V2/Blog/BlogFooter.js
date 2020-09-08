import React from 'react';
import {Link} from 'react-router-dom';

const BlogFooter = (props) => {
return(
<div id='footer-blog'>
  <h2>THANKS FOR READING</h2>
  <div id='blog-footer-buttons'>
    <Link to='/'>Visit My Portfolio</Link>
    {/* <button>Share on Twitter</button>
    <button>Share on Facebook</button> */}
  </div>
</div>
)
}
export default BlogFooter;
