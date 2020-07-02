import React from 'react';
import DevMtn from '../DevMtn.png'


const Card = (props) => {
  let color = 'white';
  if (props.color === 'white') {
    color='lightgray';
  }

return(
<div className='card' id={color}>
  <div className='card-header'>
    <div className='circle'
      id={props.context}
      src={DevMtn}
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
