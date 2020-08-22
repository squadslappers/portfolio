import React, {useState} from 'react';

const Card = (props) => {
  const [showMore, toggleMore] = useState(false);

  const description = showMore
  ? <div>{props.description}</div>
  : null;

  return (<div className={props.background + '-card-div'} onClick={()=>toggleMore(showMore ? false:true)}>
    <div className='card-header'>
      <div className='card-icon'/>
      <div className='card-main-info'>
        <h3>{props.title}</h3>
        <p>{props.details}</p>
        <span>{props.date}</span>
      </div>
    </div>
      {/* <p>{description}</p> */}
  </div>);
}
export default Card;
