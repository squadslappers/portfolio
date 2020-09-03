import React from 'react';

import Header from '../Header/Header';
import MiniHeader2 from '../MiniHeader/MiniHeader';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
// import Form from './Form';

import Devmtn from '../Images/Devmtn.png';
import Udemy from '../Images/Udemy.png';
import SlideKick from '../Images/SlideKick.png';
// import JavaScript from '../Images/JavaScript.png';
// import SamJake from '../Images/SamJake.png';
import HQRTCards from '../Images/HQRTCards.png';

const SoftwareEngineer = (props) => {
  return (<div id='main-div'>
    <Header title='SOFTWARE ENGINEERING' alt='Squid-logo'/>
    <MiniHeader2 title='SOFTWARE ENGINEER'/>

    <div className='white-section'>
      <h2>EXPERIENCE</h2>
      <div className='grid'>
        <Card background='gray' buttonColor='white'
          icon={SlideKick}
          alt='SlideKick-logo'
          title='Full-Stack Software Engineer'
          details='SlideKick'
          button1='SEE IT LIVE'
          href1='https://slidekick.us/#/'
          date='Jun 2020 — Present'/>
        <Card background='gray' buttonColor='white'
          icon={HQRTCards}
          alt='HQRT-Cards-logo'
          title='Web Developer'
          details='HQRTCards'
          date='Aug 2020 — Present'
          button1='COMING SOON'/>
        {/* <Card background='gray' buttonColor='white'
          icon={SamJake}
          title='UX/UI Designer'
          details='SJ Photography'
          href1='https://www.samueljake.com/'
          date='Jul 2020 — Present'
          button1='SEE IT LIVE'
          /> */}

      </div>
      {/* <Form/> */}
    </div>

    <div className='gray-section'>
      <h2>EDUCATION</h2>
      <div className='grid'>
        <Card background='white' buttonColor='gray'
          icon={Devmtn}
          alt='Devmountain-logo'
          title='Software Development'
          details='Devmountain'
          date='Oct 2019 — Jan 2020'
          button1='VIEW THE COURSE'
          href1='https://devmountain.com/web-bootcamp-immersive'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='The Complete JavaScript Course'
          details='Udemy'
          date='Jan 2020 — Mar 2020'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/the-complete-javascript-course/'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='React — The Complete Guide'
          details='Udemy'
          date='Feb 2020 — Mar 2020'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/react-the-complete-guide-incl-redux/'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='React Native — The Practical Guide'
          details='Udemy'
          date='Apr 2020 — Present'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/react-native-the-practical-guide/'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='Angular — The Complete Guide'
          details='Udemy'
          date='Jun 2020 — Present'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/the-complete-guide-to-angular-2/'/>
        {/* <Card background='white' buttonColor='gray'
          icon={Udemy}
          title='Computer Science 101'
          details='Udemy'
          date='Apr 2020 — Apr 2020'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/computer-science-101-master-the-theory-behind-programming/'/> */}
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='The Complete SQL Bootcamp'
          details='Udemy'
          date='Aug 2020 — Present'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/the-complete-sql-bootcamp/'/>
        {/* <Card background='white' buttonColor='gray'
          icon={Udemy}
          title='The Complete iOS App Development Bootcamp'
          details='Udemy'
          date='Aug 2020 — Present'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/ios11-app-development-bootcamp/'/> */}
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

    {/* <div className='gray-section'>
      <h2>RECENT BLOG POSTS</h2>
      <div className='grid'>
        <Card background='white' buttonColor='gray'
          title='How to Suck at Coding'
          details='Development'
          date='Sep 8, 2020'
          description='This is a blog post template. Once I actually write something, the TL;DR will appear here.'
          button1='VIEW THE POST'/>
      </div>
    </div> */}

    <Footer/>

  </div>)
}
export default SoftwareEngineer;
