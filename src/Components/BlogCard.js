import React from 'react';

const BlogCard = (props) => {

  let color = 'lightgray';

  if (props.index%2===0) {
    color = 'white'
  }

  return(<div className='blog-card' id={color}>
    <div className='blog-content'>
      <h1 className='header' id='blue'>{props.heading}</h1>
      <div className='blog-card-grid'>
        <p>{props.content}</p>
        {props.image ? <img className='img'></img>: null}
      </div>
      <ul>
        {props.bullet ? props.bullet.map((point, i) =>{
          return <li key={i}>{point}</li>
        }):null}
      </ul>
      <p>{props.content}</p>
    </div>
  </div>)
}
export default BlogCard;
