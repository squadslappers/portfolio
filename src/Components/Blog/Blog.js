import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const Blog = (props) => {
  return (<div id='blog-div'>
    <h1>Pardon My Dust...</h1>
    <p>I'm actively working on this blog page, which will be a collection of all the blog posts I write about development, marketing, philosophy, and anything else I feel like writing about. Stay tuned for more!</p>
    <p>For now, feel free to <Link to='/'>View My Portfolio</Link></p>
  </div>)
}
export default withRouter(Blog);
