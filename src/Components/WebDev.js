import React, {useContext} from 'react';

import {themeContext} from '../App';

import Section from './Section';
import Footer from './Footer';
import Header from './Header';

import DevMtn from '../styles/images/DevMtn.png';
import Udemy from '../styles/images/Udemy.png';
import SlideKick from '../styles/images/SlideKick.png';
import SuppleBudget from '../styles/images/SuppleBudget.png';
import FamilyPointer from '../styles/images/FamilyPointer.png';

const WebDevelopment = () => {

const education = {
  title: 'EDUCATION',
  cards: [
    {
      image: DevMtn,
      title: 'Web Development Bootcamp',
      context: 'DevMountain • Complete',
      description: 'DevMountain\'s 13-week, full-time web development bootcamp gave me an excellent foundation for my web development career. I now have the knowledge, experience, tools, and resources I need to be an efficient and productive full-stack developer.',
    },
    {
      image: Udemy,
      title: 'The Complete JavaScript Course',
      context: 'Udemy • Complete',
      description: 'Jonas Schmedtmann\'s JavaScript course covers everything a successful web developer needs to know about JavaScript. I now have the tools, confidence, and experience needed to tackle any coding challenge that comes my way.'
    },
    {
      image: Udemy,
      title: 'React — The Complete Guide',
      context: 'Udemy • In Progress',
      description: 'Maximilian Schwarzmüller\'s React course has greatly increased my understanding of React and enabled me to take advantage of the complex and powerful tools it has to offer.'
    },
    {
      image: Udemy,
      title: 'React Native — The Practical Guide',
      context: 'Udemy • In Progress',
      description: 'Maximilian Schwarzmüller\'s React Native course is all about creating beautiful and powerful cross-platform mobile apps.'
    },
    {
      image: Udemy,
      title: 'Angular — The Complete Guide',
      context: 'Udemy • In Progress',
      description: 'Maximilian Schwarzmüller\'s Angular course covers how to use all of the bells and whistles of Angular 9 and TypeScript to build fast, efficient, and useful web applications.'
    },
    {
      image: Udemy,
      title: 'Computer Science 101',
      context: 'Udemy • Complete',
      description: 'Kurt Anderson\'s Computer Science course covers the fundamentals of computer science theory, giving me a greater understanding of what\'s happening behind the scenes when I\'m writing code.'
    }
  ]
}
const personalProjects = {
  title: 'PERSONAL PROJECTS',
  cards: [
    {
      image: SuppleBudget,
      title: 'SuppleBudget',
      context: 'Personal • Almost Hosted',
      description: 'This dynamic application makes budgeting fast, simple, and easy for people with inconsistent incomes.'
    },
    {
      image: FamilyPointer,
      title: 'FamilyPointer',
      context: 'Personal • Almost Hosted',
      description: 'This simple tool enables parents to encourage healthy habits in their young children by using a system of Opportunities and Rewards.'
    }
  ]
}
const experience = {
  title: 'EXPERIENCE',
  cards: [
    {
      image: SlideKick,
      title: 'Full-Stack Developer Volunteer',
      context: 'SlideKick • Remote',
      description: 'I recently accepted a role as a volunteer web developer for a local startup company. The experience I have gained has increased my confidence and prepared me for a job in the development field.'
    }
  ]
}
const langtech = {
  title: 'LANGUAGES & TECHNOLOGIES',
}

return (<div id='obligatory-div'>
  <Header title='WEB DEVELOPMENT'/>
  <div className='mini-header' id='blue-header'>
    <h1>HI, I'M JAKE AND I'M A WEB DEVELOPER</h1>
  </div>
  <Section
    category = {education}
    color = 'white'/>
  <Section
    category = {experience}
    color = 'lightgray'/>
  <Section
    category = {personalProjects}
    color = 'white'/>
  <Section
    category = {langtech}
    color = 'lightgray'
    grid = {true}/>
  <Footer/>
</div>)
}

export default WebDevelopment
