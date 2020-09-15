import React from 'react';

const Skill = (props) => {
  return (<div className='skill__box'>
    <img className='skill__icon' src={props.icon} alt={props.name}/>
    <span>{props.name}</span>
  </div>)
}
export default Skill;
