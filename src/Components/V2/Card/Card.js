import React, {useState} from 'react';

const Card = (props) => {
  const [showMore, toggleMore] = useState(false);

  const button1 = props.button1
    ? <button className={props.buttonColor + '-card-button'}>{props.button1}</button>
    : null;
  const button2 = props.button2
    ? <button className={props.buttonColor + '-card-button'}>{props.button2}</button>
    : null;

  return (<div className={props.background + '-card-div'} onClick={()=>toggleMore(showMore ? false:true)}>
    <div className='card-header'>
      <img className='card-icon' src={props.icon}/>
      <div className='card-main-info'>
        <h3>{props.title}</h3>
        <p>{props.details} • {props.date}</p>
      </div>
    </div>
    <div className='card-buttons'>
      {button1}
      {button2}
    </div>
  </div>);
}
export default Card;
