import React from 'react';
import Card from './Card';
import LangTech from './LangTech';



const WhiteMain = (props) => {
  return(<div className='section' id={props.color}>
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
            image={card.image}
            title={card.title}
            context={card.context}
            description={card.description}
            color={props.color}
            />
          )
        })}</div>
    }
  </div>)
}
export default WhiteMain;
