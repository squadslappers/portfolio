import React from 'react';

const Card = (props) => {
  let color = 'white';
  if (props.color === 'white') {
    color='lightgray';
  }

return(
<div className='card' id={color}>
  <div className='card-header'>
    <img className='circle'
      id={props.context}
      src={props.image}
    />
    <div>
      <h2>{props.title}</h2>
      <span>{props.context}</span>
    </div>
  </div>
  <p>{props.description}</p>
</div>
)
}
export default Card;
