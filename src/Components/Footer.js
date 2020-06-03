import React from 'react';

const Footer = () => {
return(
<div id='footer-main'>
  <h1>
      Connect With Me
  </h1>
  <div className='footer-icon-container'>
    <a href='mailto:jacob.w.moreno@gmail.com?subject=Reaching Out'>
      <img alt='email' src='https://squidslippers.s3-us-west-1.amazonaws.com/Connect_Email.PNG' height='50px' width='50px'/>
    </a>
    <a href='tel:8018678774'>
      <img alt='phone' src='https://squidslippers.s3-us-west-1.amazonaws.com/Connect_Phone.PNG' height='50px' width='50px'/>
    </a>
    <a href='https://docs.google.com/document/d/1PO0WhKcSaZYDRJMgsUzVTuHL7cci9kxaTh4pzxtb0Yw/edit?usp=sharing' target='_blank' rel="noopener noreferrer">
      <img alt='resume' src='https://squidslippers.s3-us-west-1.amazonaws.com/Connect_Resume.PNG' height='50px' width='50px'/>
    </a>
    <a href='https://www.twitter.com/squidslippers' target='_blank' rel="noopener noreferrer">
      <img alt='twitter' src='https://squidslippers.s3-us-west-1.amazonaws.com/Connect_Twitter.PNG' height='50px' widht='50px'/>
    </a>
    <a id='instagram' href='http://www.instagram.com/' rel='noopener nonreferrer'>
      <img alt='instagram' src='https://squidslippers.s3-us-west-1.amazonaws.com/Connect_Instagram.png' height='50px' width='50px'/>
    </a>
    <a id='github' href='https://www.github.com/squadslappers' target='_blank' rel="noopener noreferrer">
      <img alt='github' src='https://squidslippers.s3-us-west-1.amazonaws.com/Connect_GitHub.PNG' height='50px' width='50px'/>
    </a>
    <a id='linkedin' href='https://www.linkedin.com/in/jacob-moreno' target='_blank' rel="noopener noreferrer">
      <img alt='linkedin' src='https://squidslippers.s3-us-west-1.amazonaws.com/Connect_LinkedIn.PNG' height='50px' width='50px'/>
    </a>
  </div>
</div>
)
}
export default Footer;