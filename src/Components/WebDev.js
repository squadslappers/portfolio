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
      context: 'DevMountain',
      description: 'I graduated from DevMountain feeling comfortable and confident in my abilities as a web developer. Before I attended I knew absolutely nothing about coding, so it was a major success.',
    },
    {
      title: 'The Complete JavaScript Course',
      context: 'Udemy',
      description: 'This course is helping me master the art of writing, reading, organizing, understanding, and debugging JavaScript code — ES6+, OOP, AJAX, Webpack and all.'
    },
    {
      title: 'React — The Complete Guide',
      context: 'Udemy',
      description: 'This course covers everything there is to know about React — from basic features and syntax to redux, context, hooks, and more.'
    },
    {
      title: 'React Native — The Practical Guide',
      context: 'Udemy',
      description: 'This course is all about learning to use React and JavaScript to create cross-platform mobile apps — from styling and functionality to authentication and connecting to backend servers.'
    },
    {
      title: 'Angular — The Complete Guide',
      context: 'Udemy',
      description: 'This course covers how to use Angular 9 and TypeScript to build fast, efficient, and useful web applications.'
    },
    {
      title: 'Computer Science 101',
      context: 'Udemy',
      description: 'This course covers the fundamentals of computer science theory. Big O notation, sorting algorithms, and linked lists are only a few of the important topics this course teaches.'
    }
  ]
}
const examples = {
  title: 'EXAMPLES',
  cards: [
    {
      title: 'SuppleBudget',
      context: 'Personal',
      description: 'This is a dynamic budgeting application that I built. The unique approach I took to building this application allows your budget to be more flexible than ever.'
    },
    {
      title: 'Employment',
      context: 'Personal',
      description: 'Family Pointer is a tool to help parents encourage healthy habits in their young children with the help of a system based on Opportunities, Rewards, and the occasional Punishment.'
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