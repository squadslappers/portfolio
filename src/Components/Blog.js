import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogCard from './BlogCard';

import {Link} from 'react-router-dom';

const Blog = (props) => {

  const blog = {
    title: 'Placeholder Blog Title',
    sections: [
      {
        heading: 'Heading 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut egestas nunc. Fusce ultricies nec diam sit amet imperdiet. Suspendisse tristique, dolor in eleifend ornare, felis sapien volutpat ante, sed imperdiet libero ligula vitae velit. Donec sed eros efficitur, tristique ipsum non, suscipit nisl. Donec id efficitur lectus. Cras pellentesque porta purus, nec pretium justo consectetur non. Sed condimentum leo nec urna ultrices porta. Nulla finibus accumsan libero.',
        bullet: [
          "Test bullet 1",
          'Test bullet 2',
          'Test bullet 3'
        ],
        image: true
      },
      {
        heading: 'Heading 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut egestas nunc. Fusce ultricies nec diam sit amet imperdiet. Suspendisse tristique, dolor in eleifend ornare, felis sapien volutpat ante, sed imperdiet libero ligula vitae velit. Donec sed eros efficitur, tristique ipsum non, suscipit nisl. Donec id efficitur lectus. Cras pellentesque porta purus, nec pretium justo consectetur non. Sed condimentum leo nec urna ultrices porta. Nulla finibus accumsan libero.',
        image: true
      }
    ]
  }

  return (<div className='obligatory-div'>
    <Header title='BLOG'/>
    <div className='mini-header' id='blue-header'>
      <h1>{blog.title}</h1>
    </div>
    <div className='blog-div'>
      {blog.sections.map((blog, index) => {
        return (
          <BlogCard
            heading = {blog.heading}
            content = {blog.content}
            bullet = {blog.bullet}
            image = {blog.image}
            color = {'lightgray'}
            index = {index}
            key = {index}/>
        )
      })}
    </div>
    <Link to='/'><button>View My Portfolio</button></Link>
    <Footer/>
  </div>)
}
export default Blog;
