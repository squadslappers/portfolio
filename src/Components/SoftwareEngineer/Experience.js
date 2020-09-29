import React from 'react';

import Card from '../Card';

import HQRTCards from '../../styles/images/experience/HQRTCards.png';
import SlideKick from '../../styles/images/experience/SlideKick.png';

const Experience = (props) => {
  return (<div className='section blue'>
  <h2>PROJECTS</h2>
  <div className='grid'>
    <Card
      title='Full-Stack Developer'
      details='Clean In A Jiff'
      button1='SEE IT LIVE'
      href1='https://cleaninajiff.web.app/'
      image={true}
      date='Aug 2020 - Aug 2020'/>
    <Card
      title='UX/UI Designer'
      details='Samuel Jake Photography'
      button1='SEE IT LIVE'
      href1='https://www.samueljake.com/'
      image={true}
      date='July 2020 - Present'/>
    <Card
      icon={SlideKick}
      alt='SlideKick-logo'
      title='Full-Stack Software Engineer'
      details='SlideKick'
      button1='SEE IT LIVE'
      href1='https://slidekick.us/#/'
      image={true}
      date='Jun 2020 — Aug 2020'/>
    {/* <Card background='gray' buttonColor='white'
      icon={HQRTCards}
      alt='HQRT-Cards-logo'
      title='Web Developer'
      details='HQRTCards'
      date='Aug 2020 — Present'
      image={true}
      button1='COMING SOON'/> */}
  </div>
</div>)
}

export default Experience;
