import React from 'react';
import Header from './Header';
import Section from './Section';

const Blog = () => {

  const blogs = {
    title: 'Web Development',
    cards: [
      {
        title: 'Test Title',
        context: '04/06/2020',
        description: 'This is a test description of whatever I decide to put here for the blog. This is all I can come up with right now; I just want to see if this changes the widtn'
      },
      {
        title: 'Test Title',
        context: '04/06/2020',
        description: 'This is a test description of whatever I decide to put here for the blog. This is all I can come up with right now; I just want to see if this changes the widtn'
      },
    ]
  }

  return (<div id='obligatory-div'>
    <Header title='BLOG'/>
    <div className='mini-header' id='red-header'>
      <h1>HI, I'M JAKE AND I'M A BLOGGER</h1>
    </div>
    <Section
      category = {blogs}
      color = 'white'/>
    <Section
      category = {blogs}
      color = 'lightgray'/>
  </div>)
}
export default Blog;
