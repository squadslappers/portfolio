import React from 'react';
// Components
import About from './About';
import Card from '../Card';
import Experience from './Experience';
import Footer from '../Footer';
import Header from '../Header';
import MiniHeader from '../MiniHeader';
import RecentBlogPosts from './RecentBlogPosts';
import Skills from './Skills';
// Education
import Devmtn from '../../styles/images/education/Devmtn.png';
import Udemy from '../../styles/images/education/Udemy.png';

const SoftwareEngineer = (props) => {
  return (<div id='main-div'>
    <Header title='SOFTWARE ENGINEERING' alt='squid-logo'/>
    <MiniHeader title="HI, I'M JAKE AND I'M A SOFTWARE ENGINEER"/>
    <About/>
    <RecentBlogPosts/>
    <Experience/>
    <Skills/>

    <div className='section black'>
      <h2>EDUCATION</h2>
      <div className='grid'>
        <Card background='white' buttonColor='gray'
          icon={Devmtn}
          alt='Devmountain-logo'
          title='Full-Stack Web Development'
          details='Devmountain'
          date='Complete'
          // button1='VIEW THE COURSE'
          href1='https://devmountain.com/web-bootcamp-immersive'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='The Complete JavaScript Course'
          details='Udemy'
          date='Complete'
          // button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/the-complete-javascript-course/'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='React — The Complete Guide'
          details='Udemy'
          date='Complete'
          // button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/react-the-complete-guide-incl-redux/'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='React Native — The Practical Guide'
          details='Udemy'
          date='In Progress'
          // button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/react-native-the-practical-guide/'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          alt='Udemy-logo'
          title='Angular — The Complete Guide'
          details='Udemy'
          date='In Progress'
          // button1='VIEW THE COURSE'
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
          date='In Progress'
          // button1='VIEW THE COURSE'
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

    {/* <div className='gray-section'>
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
    </div> */}

    <Footer/>

  </div>)
}
export default SoftwareEngineer;
