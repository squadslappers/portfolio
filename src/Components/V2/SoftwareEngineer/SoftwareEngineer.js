import React from 'react';

import Header from '../Header/Header';
import MiniHeader2 from '../MiniHeader/MiniHeader';
import Card from '../Card/Card';
import Form from './Form';

const SoftwareEngineer = (props) => {
  return (<div id='main-div'>
    <Header title='SOFTWARE ENGINEERING'/>
    <MiniHeader2 title='SOFTWARE ENGINEER'/>
    <div className='white-section'>
      <h2>EXPERIENCE</h2>
      <div className='grid'>
        <Card background='gray'
          title='Full-Stack Software Engineer'
          details='SlideKick'
          date='Jun 2020 — Present'/>
        <Card background='gray'
          title='UX/UI Designer'
          details='SJ Photography'
          date='Jul 2020 — Present'/>
        <Card background='gray'
          title='Web Developer'
          details='HQRTCards'
          date='Aug 2020 — Present'/>
      </div>
      {/* <Form/> */}
    </div>
    <div className='gray-section'>
      <h2>EDUCATION</h2>
      <div className='grid'>
        <Card background='white'
          title='Web Development Certificate'
          details='DevMountain'
          date='Oct 2019 — Jan 2020'/>
        <Card background='white'
          title='The Complete JavaScript Course'
          details='Udemy'
          date='Jan 2020 — Mar 2020'/>
        <Card background='white'
          title='React — The Complete Guide'
          details='Udemy'
          date='Feb 2020 — Mar 2020'/>
        <Card background='white'
          title='React Native — The Practical Guide'
          details='Udemy'
          date='Apr 2020 — Present'/>
        <Card background='white'
          title='Angular — The Complete Guide'
          details='Udemy'
          date='Jun 2020 — Present'/>
        <Card background='white'
          title='Computer Science 101'
          details='Udemy'
          date='Apr 2020 — Apr 2020'/>
      </div>
    </div>

    <div className='white-section'>
      <h2>LANGUAGES & TECHNOLOGIES</h2>
      <div className='icon-grid'>
        <div className='icon-container'>
          <div className='icon' id='axios'/>
          <span>Axios</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='css'/>
          <span>CSS</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='express'/>
          <span>express</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='html'/>
          <span>HTML</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='jsx'/>
          <span>JSX</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='javascript'/>
          <span>JavaScript</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='node'/>
          <span>Node</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='postgresql'/>
          <span>PostgreSQL</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='postman'/>
          <span>Postman</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='react'/>
          <span>React</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='redux'/>
          <span>Redux</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='sass'/>
          <span>Sass</span>
        </div>
      </div>
    </div>
  </div>)
}
export default SoftwareEngineer;
