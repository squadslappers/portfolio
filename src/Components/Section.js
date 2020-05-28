import React from 'react';
import Card from './Card';
import LangTech from './LangTech';

const WhiteMain = (props) => {
  return(<div className='white-section' id={props.color === 'Gray' ? 'gray' : null}>
    <h1>{props.category.title}</h1>
    <div className='line'/>
    {props.grid ? 
      <LangTech/>
      :
      <div className='cards'>
        {props.category.cards.map((card, index) => {
          return (
            <Card
            key={index}
            title={card.title}
            context={card.context}
            description={card.description}
            />
          )
        })}</div>
    }
  </div>)
}
export default WhiteMain;