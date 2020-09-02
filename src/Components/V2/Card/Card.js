import React, {useState} from 'react';

const Card = (props) => {
  const [showMore, toggleMore] = useState(false);

  const button1 = props.button1
    ? <a className={props.buttonColor + '-card-button'} href={props.href1} target='_blank' rel="noopener noreferrer">{props.button1}</a>
    : null;
  const button2 = props.button2
    ? <a className={props.buttonColor + '-card-button'} href={props.href1} target='_blank' rel="noopener noreferrer">{props.button2}</a>
    : null;

  return (<div className={props.background + '-card-div'} onClick={()=>toggleMore(showMore ? false:true)}>
    <div className='card-header'>
      <img className='card-icon' src={props.icon}/>
      <div className='card-main-info'>
        <h3>{props.title}</h3>
        <p>{props.details} • {props.date}</p>
      </div>
    </div>
    {/* <span>{props.description}</span> */}
    <div className='card-buttons'>
      {button1}
      {button2}
    </div>
  </div>);
}
export default Card;
