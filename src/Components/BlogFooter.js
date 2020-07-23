import React from 'react';
import {Link} from 'react-router-dom';

const BlogFooter = (props) => {
return(
<div id='footer-blog'>
  <h1>Thanks for Reading!</h1>
  <div id='blog-footer-buttons'>
    <div id='blog-footer-section'>
      <h3>Share This Post</h3>
      <Link to='/'><button>Share on Twitter</button></Link>
      <Link to='/'><button>Share on Facebook</button></Link>
    </div>
    <div id='blog-footer-section'>
      <h3>Connect With Me</h3>
      <Link to='/'><button>Visit My Portfolio</button></Link>
      <Link to='/'><button>View My Resume</button></Link>
      <Link to='/'><button>Visit My LinkedIn Profile</button></Link>
    </div>
  </div>
</div>
)
}
export default BlogFooter;
