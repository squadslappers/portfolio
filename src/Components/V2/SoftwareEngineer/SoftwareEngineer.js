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
        <Card
          background='gray'
          title='Full-Stack Software Engineer'
          details='SlideKick • Mar 2020 — Present'/>
        <Card
          background='gray'
          title='UX/UI Designer'
          details='SJ Photography • Jul 2020 — Present'/>
        <Card
          background='gray'
          title='Web Developer'
          details='HQRTCards • Aug 2020 — Present'/>
      </div>
      {/* <Form/> */}
    </div>
    <div className='gray-section'>
      <h2>EDUCATION</h2>
      <div className='grid'>
        <Card background='white' title='Web Development Certificate' details='DevMountain' date='Oct 2019 — Jan 2020'/>
        <Card background='white' title='The Complete JavaScript Course' details='Udemy'/>
        <Card background='white' title='React — The Complete Guide' details='Udemy'/>
        <Card background='white' title='React Native — The Practical Guide' details='Udemy'/>
        <Card background='white' title='Angular — The Complete Guide' details='Udemy'/>
        <Card background='white' title='Computer Science 101' details='Udemy'/>
      </div>
    </div>
  </div>)
}
export default SoftwareEngineer;
