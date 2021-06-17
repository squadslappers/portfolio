import React from 'react';

import Card from '../Card';

import Jiffy1 from '../../styles/images/experience/Jiffy1.PNG';
import Jiffy2 from '../../styles/images/experience/Jiffy2.PNG';
import Jiffy3 from '../../styles/images/experience/Jiffy3.PNG';
import Sam1 from '../../styles/images/experience/Sam1.png';
import Sam2 from '../../styles/images/experience/Sam2.png';
import Sam3 from '../../styles/images/experience/Sam3.png';
import SlideKick1 from '../../styles/images/experience/SlideKick1.png';
import SlideKick2 from '../../styles/images/experience/SlideKick2.png';
import SlideKick3 from '../../styles/images/experience/SlideKick3.png';

const Experience = (props) => {
  return (<div className='section blue'>
  <h2>PROJECTS</h2>
  <div className='grid'>
    <Card
      title='Full-Stack Developer'
      details='Clean In A Jiff'
      image={Jiffy1}
      image2={Jiffy2}
      image3={Jiffy3}
      alt='clean in a jiff website'
      button1='SEE IT LIVE'
      href1='https://cleaninajiff.web.app/'
      date='Aug 2020 - Aug 2020'/>
    <Card
      title='UX/UI Designer'
      details='Samuel Jake Photography'
      image2={Sam1}
      image={Sam2}
      image3={Sam3}
      alt='sam jake photography website'
      button1='SEE IT LIVE'
      href1='https://www.samueljake.com/'
      date='July 2020 - Present'/>
    <Card
      title='Full-Stack Software Engineer'
      image={SlideKick1}
      image2={SlideKick2}
      image3={SlideKick3}
      alt='slidekick website'
      details='SlideKick'
      button1='SEE IT LIVE'
      href1='https://slidekick.us/#/'
      date='Jun 2020 — Aug 2020'/>
    {/* <Card background='gray' buttonColor='white'
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
