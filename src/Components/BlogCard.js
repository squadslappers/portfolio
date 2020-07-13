import React from 'react';

const BlogCard = (props) => {

  let color = 'lightgray';

  if (props.index%2===0) {
    console.log(props.index);
    color = 'white'
  }

  return(<div className='blog-card' id={color}>
    <h1 className='header' id='blue'>{props.heading}</h1>
    <div className='blog-card-grid'>
      <p>{props.content}</p>
      <img className='img'>{props.image}</img>
    </div>
  </div>)
}
export default BlogCard;
