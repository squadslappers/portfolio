import React from 'react';

import Header from '../Header/Header';
import MiniHeader from '../MiniHeader/MiniHeader';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
// import Form from './Form';

import Devmtn from '../Images/Devmtn.png';
import Udemy from '../Images/Udemy.png';
import SlideKick from '../Images/SlideKick.png';
// import JavaScript from '../Images/JavaScript.png';
// import SamJake from '../Images/SamJake.png';
import HQRTCards from '../Images/HQRTCards.png';
import SquidslippersOrange from '../Images/SquidslippersOrange.png'

const SoftwareEngineer = (props) => {
  return (<div id='main-div'>
    <Header title='SOFTWARE ENGINEERING' alt='squid-logo'/>
    <MiniHeader title="HI, I'M JAKE AND I'M A SOFTWARE ENGINEER"/>

    <div className='white-section'>
      <h2>SKILLS</h2>
      <div className='skills'>
        <div className='skills__section'>
          <h3>FRONT END</h3>
          <div className='icon-grid__2'>
            <div className='skill__box'>
              <div className='skill__icon' id='javascript'/>
              <span>JavaScript</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='typescript'/>
              <span>TypeScript</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='react'/>
              <span>React</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='redux'/>
              <span>Redux</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='html'/>
              <span>HTML</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='socket.io'/>
              <span>Socket.io</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='css'/>
              <span>CSS</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='sass'/>
              <span>SASS</span>
            </div>
            {/* <div className='skill__box'>
              <div className='skill__icon' id='d3'/>
              <span>D3</span>
            </div> */}
            <div className='skill__box'>
              <div className='skill__icon' id='chartjs'/>
              <span>Chart.js</span>
            </div>
          </div>
        </div>
        <div className='skills__section'>
          <h3>BACKEND</h3>
          <div className='icon-grid__2'>
            <div className='skill__box'>
              <div className='skill__icon' id='axios'/>
              <span>axios</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='express'/>
              <span>Express</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='node'/>
              <span>Node</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='massive'/>
              <span>Massive</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='postgresql'/>
              <span>PostgreSQL</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='bcryptjs'/>
              <span>Bcrypt.js</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='json'/>
              <span>JSON</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='redis'/>
              <span>Redis</span>
            </div>
          </div>
        </div>
        <div className='skills__section'>
          <h3>EXTERNAL TOOLS</h3>
          <div className='icon-grid__2'>
            <div className='skill__box'>
              <div className='skill__icon' id='docker'/>
              <span>Docker</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='tableplus'/>
              <span>TablePlus</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='heroku'/>
              <span>Heroku</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='postman'/>
              <span>Postman</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='awslambda'/>
              <span>AWS Lambda</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='awss3'/>
              <span>awss3</span>
            </div>
            <div className='skill__box'>
              <div className='skill__icon' id='awsapigateway'/>
              <span>AWS API Gateway</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='gray-section'>
      <h2>EXPERIENCE</h2>
      <div className='grid'>
        <Card background='white' buttonColor='gray'
          icon={SlideKick}
          alt='SlideKick-logo'
          title='Full-Stack Software Engineer'
          details='SlideKick'
          button1='SEE IT LIVE'
          href1='https://slidekick.us/#/'
          date='Jun 2020 — Present'/>
        <Card background='white' buttonColor='gray'
          icon={HQRTCards}
          alt='HQRT-Cards-logo'
          title='Web Developer'
          details='HQRTCards'
          date='Aug 2020 — Present'
          button1='COMING SOON'/>
        {/* <Card background='gray' buttonColor='gray'
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

    <div className='white-section'>
      <h2>EDUCATION</h2>
      <div className='grid'>
        <Card background='gray' buttonColor='white'
          icon={Devmtn}
          alt='Devmountain-logo'
          title='Full-Stack Web Development'
          details='Devmountain'
          date='Complete'
          button1='VIEW THE COURSE'
          href1='https://devmountain.com/web-bootcamp-immersive'/>
        <Card background='gray' buttonColor='white'
          icon={Udemy}
          alt='Udemy-logo'
          title='The Complete JavaScript Course'
          details='Udemy'
          date='Complete'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/the-complete-javascript-course/'/>
        <Card background='gray' buttonColor='white'
          icon={Udemy}
          alt='Udemy-logo'
          title='React — The Complete Guide'
          details='Udemy'
          date='Complete'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/react-the-complete-guide-incl-redux/'/>
        <Card background='gray' buttonColor='white'
          icon={Udemy}
          alt='Udemy-logo'
          title='React Native — The Practical Guide'
          details='Udemy'
          date='In Progress'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/react-native-the-practical-guide/'/>
        <Card background='gray' buttonColor='white'
          icon={Udemy}
          alt='Udemy-logo'
          title='Angular — The Complete Guide'
          details='Udemy'
          date='In Progress'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/the-complete-guide-to-angular-2/'/>
        {/* <Card background='gray' buttonColor='white'
          icon={Udemy}
          title='Computer Science 101'
          details='Udemy'
          date='Apr 2020 — Apr 2020'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/computer-science-101-master-the-theory-behind-programming/'/> */}
        <Card background='gray' buttonColor='white'
          icon={Udemy}
          alt='Udemy-logo'
          title='The Complete SQL Bootcamp'
          details='Udemy'
          date='In Progress'
          button1='VIEW THE COURSE'
          href1='https://www.udemy.com/course/the-complete-sql-bootcamp/'/>
        {/* <Card background='gray' buttonColor='white'
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

    <div className='gray-section'>
      <h2>RECENT BLOG POSTS</h2>
      <div className='grid'>
        <Card background='white' buttonColor='gray'
          icon={SquidslippersOrange}
          title='Racial Applications'
          details='Workplace Ethics'
          date='Sep 8, 2020'
          description='Is it time to remove?.'
          link='/blog/racial-applications'
          linkWords='VIEW THE POST'/>
        <Card background='white' buttonColor='gray'
          icon={SquidslippersOrange}
          title='3 Tips to Land Your Next Coding Job'
          details='Job Search'
          date='Sep 10, 2020'
          link='/blog/3-tips-to-land-your-next-coding-job'
          linkWords='VIEW THE POST'/>
      </div>
    </div>

    <Footer/>

  </div>)
}
export default SoftwareEngineer;
