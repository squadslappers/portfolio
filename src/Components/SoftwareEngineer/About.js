import React from 'react';

import Me from '../../styles/images/Me.png';

const About = (props) => {
  return (<div className='section black'>
  <h2>ABOUT</h2>
  <div className='top-grid'>
    <img className='me' src={Me} alt='me'/>
    <div className='me-div'>
      <p>
        ...with a background in <span className='about__bold'>digital marketing</span>. After working as a graphic designer, social media manager, copywriter, content creator, SEO Specialist, and doing other freelance digital marketing work, I decided to add <span className='about__bold'>web development</span> to my skillset.
      </p>
      <p>
        So, I took a few <span className='about__bold'>computer science</span> courses at Utah Valley University, enrolled in a <span className='about__bold'>software engineering</span> course at Devmountain, continued my studies via various courses on Udemy, and became a software engineer.
      </p>
      <p>
        <span className='about__bold'>I am currently looking for employment</span>, so if you find that my background and experience meet your needs, <span className='about__bold'>let's get in touch!</span>
      </p>
    </div>
  </div>
</div>)
}
export default About;
