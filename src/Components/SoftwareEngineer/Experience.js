import React from 'react';

import Card from '../Card';

import HQRTCards from '../../styles/images/experience/HQRTCards.png';
import SlideKick from '../../styles/images/experience/SlideKick.png';

const Experience = (props) => {
  return (<div className='section blue'>
  <h2>EXPERIENCE</h2>
  <div className='grid'>
    <Card background='gray' buttonColor='white'
      icon={SlideKick}
      alt='SlideKick-logo'
      title='Full-Stack Software Engineer'
      details='SlideKick'
      button1='SEE IT LIVE'
      href1='https://slidekick.us/#/'
      image={true}
      date='Jun 2020 — Present'/>
    <Card background='gray' buttonColor='white'
      icon={HQRTCards}
      alt='HQRT-Cards-logo'
      title='Web Developer'
      details='HQRTCards'
      date='Aug 2020 — Present'
      image={true}
      button1='COMING SOON'/>
  </div>
</div>)
}

export default Experience;
