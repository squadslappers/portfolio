import React from 'react';

import Header from '../Header';
import TestMiniHeader from './TestMiniHeader';
import TestCard from './TestCard';
import Footer from '../Footer';

const SoftwareEngineer = () => {

  const title = 'SOFTWARE ENGINEER';

return (<div id='obligatory-div'>
  <Header title={title}/>
  <TestMiniHeader title={title}/>
  <div className='white-section'>
    <h1>EDUCATION</h1> <div className='orange-line'/>
    <div className='test-card-container'>
      <TestCard
        backgroundColor='gray'
        title='DevMountain'
        context='hello there'
        description='I went to DevMountain once. It was a good time. I enjoyed it there. But then I got screwed over and disrespected by their staff. Now I would not recommend it to anybody. I will discourage everybody from going there until the day I die. What a shame.'
      />
      <TestCard
        backgroundColor='gray'
        title='DevMountain'
        context='hello there'
        description='I went to DevMountain once. It was a good time. I enjoyed it there. But then I got screwed over and disrespected by their staff. Now I would not recommend it to anybody. I will discourage everybody from going there until the day I die. What a shame.'
      />
    </div>
  </div>
  <div className='lightgray-section'>
    <h1>EXPERIENCE</h1> <div className='orange-line'/>
  </div>
  <Footer/>
</div>)
}

export default SoftwareEngineer
