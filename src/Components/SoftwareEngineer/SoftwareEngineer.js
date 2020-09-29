import React from 'react';

import Header from '../Header';
import MiniHeader from '../MiniHeader';
import Card from '../Card';
import Footer from '../Footer';
import Skill from './Skill';
import About from './About';
// Education
import Devmtn from '../../styles/images/education/Devmtn.png';
import Udemy from '../../styles/images/education/Udemy.png';
// Experience
import HQRTCards from '../../styles/images/experience/HQRTCards.png';
import SlideKick from '../../styles/images/experience/SlideKick.png';
// Skills
import AdobeCreativeCloud from '../../styles/images/skills/AdobeCreativeCloud.png';
import Agile from '../../styles/images/skills/Agile.png';
import AWSLambda from '../../styles/images/skills/AWSLambda.png';
import AWSS3 from '../../styles/images/skills/AWSS3.png';
import AWSAPI from '../../styles/images/skills/AWSAPI.png';
import Axios from '../../styles/images/skills/Axios.png';
import Chartjs from '../../styles/images/skills/Chartjs.png';
import CSS from '../../styles/images/skills/CSS.png';
import Docker from '../../styles/images/skills/Docker.png';
import Express from '../../styles/images/skills/Express.png';
import Fetch from '../../styles/images/skills/Fetch.png';
import Git from '../../styles/images/skills/Git.png';
import GitHub from '../../styles/images/skills/GitHub.png';
import Heroku from '../../styles/images/skills/Heroku.png';
import HTML from '../../styles/images/skills/HTML.png';
import JavaScript from '../../styles/images/skills/JavaScript.png';
import JSON from '../../styles/images/skills/JSON.png';
import Massive from '../../styles/images/skills/Massive.png';
import Node from '../../styles/images/skills/Node.png';
import NodeMailer from '../../styles/images/skills/NodeMailer.png';
import PostgreSQL from '../../styles/images/skills/PostgreSQL.png';
import Postman from '../../styles/images/skills/Postman.png';
import ReactIcon from '../../styles/images/skills/React.png';
import Redis from '../../styles/images/skills/Redis.png';
import ReduxIcon from '../../styles/images/skills/Redux.png';
import Sass from '../../styles/images/skills/Sass.png';
import ScrumMaster from '../../styles/images/skills/ScrumMaster.png';
import SocketIcon from '../../styles/images/skills/Socketio.png';
import SquidslippersOrange from '../../styles/images/SquidslippersOrange.png'
import TablePlus from '../../styles/images/skills/TablePlus.png';
import TypeScript from '../../styles/images/skills/TypeScript.png';
import UXUI from '../../styles/images/skills/UXUI.png';

const SoftwareEngineer = (props) => {
  return (<div id='main-div'>
    <Header title='SOFTWARE ENGINEERING' alt='squid-logo'/>
    <MiniHeader title="HI, I'M JAKE AND I'M A SOFTWARE ENGINEER"/>
    <About/>
    <div className='gray-section'>
      {/* <a id="skills" href='#'/> */}
      <h2>SKILLS</h2>
      <div className='skills'>
        <div className='skills__section'>
          <h3>FRONT END</h3>
          <div className='icon-grid__2'>
            <Skill
              icon={JavaScript}
              name='JavaScript'/>
            <Skill
              icon={TypeScript}
              name='TypeScript'/>
            <Skill
              icon={ReactIcon}
              name='React'/>
            <Skill
              icon={ReduxIcon}
              name='Redux'/>
            <Skill
              icon={HTML}
              name='HTML'/>
            <Skill
              icon={CSS}
              name='CSS'/>
            <Skill
              icon={Sass}
              name='Sass'/>
            <Skill
              icon={SocketIcon}
              name='Socket.io'/>
            <Skill
              icon={Chartjs}
              name='Chart.js'/>
            <Skill
              icon={UXUI}
              name='UX / UI'/>
          </div>
        </div>
        <div className='skills__section'>
          <h3>BACKEND</h3>
          <div className='icon-grid__2'>
            <Skill
              icon={Axios}
              name='Axios'/>
            <Skill
              icon={Fetch}
              name='Fetch'/>
            <Skill
              icon={Express}
              name='Express'/>
            <Skill
              icon={Node}
              name='Node'/>
            <Skill
              icon={Massive}
              name='Massive'/>
            <Skill
              icon={PostgreSQL}
              name='PostgreSQL'/>
            <Skill
              icon={JSON}
              name='JSON'/>
            <Skill
              icon={Redis}
              name='Redis'/>
            <Skill
              icon={NodeMailer}
              name='NodeMailer'/>
          </div>
        </div>
        <div className='skills__section'>
          <h3>OTHER</h3>
          <div className='icon-grid__2'>
          <Skill
              icon={Docker}
              name='Docker'/>
            <Skill
              icon={TablePlus}
              name='TablePlus'/>
            <Skill
              icon={Heroku}
              name='Heroku'/>
            <Skill
              icon={Postman}
              name='Postman'/>
            <Skill
              icon={AWSLambda}
              name='AWS Lambda'/>
            <Skill
              icon={AWSS3}
              name='AWS S3'/>
            <Skill
              icon={AWSAPI}
              name='AWS API Gateway'/>
            <Skill
              icon={Git}
              name='Git'/>
            <Skill
              icon={GitHub}
              name='GitHub'/>
            <Skill
              icon={ScrumMaster}
              name='Scrum Master'/>
            <Skill
              icon={Agile}
              name='Agile'/>
            <Skill
              icon={AdobeCreativeCloud}
              name='Creative Cloud'/>
          </div>
        </div>
      </div>
    </div>

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
      </div>
    </div>

    <div className='gray-section'>
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

    <div className='white-section'>
      <h2>RECENT BLOG POSTS</h2>
      <div className='grid'>
        <Card background='gray' buttonColor='white'
          icon={SquidslippersOrange}
          title='Racial Applications'
          details='Workplace Ethics'
          date='Sep 8, 2020'
          description='Is it time to remove?.'
          link='/blog/racial-applications'
          linkWords='VIEW THE POST'/>
        <Card background='gray' buttonColor='white'
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
