import React from 'react';

import Section from './Section';
import Footer from './Footer';
import Header from './Header';

const WebDevelopment = () => {

const education = {
  title: 'EDUCATION', 
  cards: [
    {
      title: 'Web Development Bootcamp',
      context: 'DevMountain • Complete',
      description: 'DevMountain\'s 13-week, full-time web development bootcamp gave me an excellent foundation for my web development career. I now have the knowledge, experience, tools, and resources I need to be an efficient and productive full-stack developer.',
    },
    {
      title: 'The Complete JavaScript Course',
      context: 'Udemy • Complete',
      description: 'Jonas Schmedtmann\'s JavaScript course covers everything a successful web developer needs to know about JavaScript. I now have the tools, confidence, and experience needed to tackle any coding challenge that comes my way.'
    },
    {
      title: 'React — The Complete Guide',
      context: 'Udemy • In Progress',
      description: 'Maximilian Schwarzmüller\'s React course has greatly increased my understanding of React and enabled me to take advantage of the complex and powerful tools it has to offer.'
    },
    {
      title: 'React Native — The Practical Guide',
      context: 'Udemy • In Progress',
      description: 'Maximilian Schwarzmüller\'s React Native course is all about creating beautiful and powerful cross-platform mobile apps.'
    },
    {
      title: 'Angular — The Complete Guide',
      context: 'Udemy • In Progress',
      description: 'Maximilian Schwarzmüller\'s Angular course covers how to use all of the bells and whistles of Angular 9 and TypeScript to build fast, efficient, and useful web applications.'
    },
    {
      title: 'Computer Science 101',
      context: 'Udemy • Complete',
      description: 'Kurt Anderson\'s Computer Science course covers the fundamentals of computer science theory, giving me a greater understanding of what\'s happening behind the scenes when I\'m writing code.'
    }
  ]
}
const examples = {
  title: 'EXAMPLES',
  cards: [
    {
      title: 'SuppleBudget',
      context: 'Personal • Almost Hosted',
      description: 'This dynamic application makes budgeting fast, simple, and easy for people with inconsistent incomes.'
    },
    {
      title: 'Employment',
      context: 'Personal • Almost Hosted',
      description: 'This simple tool enables parents to encourage healthy habits in their young children by using a system of Opportunities and Rewards.'
    }
  ]
}
const langtech = {
  title: 'LANGUAGES & TECHNOLOGIES',
}

return (<div id='web-development'>
    <Header
      title='WEB DEVELOPMENT'/>
    <div id='mini-header'>
      <h1>HI, I'M JAKE AND I'M A WEB DEVELOPER</h1>
    </div>
    <Section
      category = {education}
      color = 'White'/>
    <Section
      category = {examples}
      color = 'Gray'/>
    <Section
      category = {langtech}
      grid = {true}/>
    <Footer/>
</div>)
}

export default WebDevelopment