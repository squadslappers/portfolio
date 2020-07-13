import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogCard from './BlogCard';

const Blog = (props) => {

  const blog = {
    title: 'My Experience With DevMountain',
    sections: [
      {
        heading: 'Before',
        content: 'Before I was a web developer, I was an idiot. I did not want to develop webs. Who am I? Spider-Man? GTFO. Before I was a web developer, I was an idiot. I did not want to develop webs. Who am I? Spider-Man? GTFO. Before I was a web developer, I was an idiot. I did not want to develop webs. Who am I? Spider-Man? GTFO. Before I was a web developer, I was an idiot. I did not want to develop webs. Who am I? Spider-Man? GTFO. Before I was a web developer, I was an idiot. I did not want to develop webs. Who am I? Spider-Man? GTFO.',
      },
      {
        heading: 'During',
        content: 'As I was attending DevMountain, I realized that I\'m a lil\' bitch who is an idiot. Also, Matias is a giant bitch. Didn\'t even contact me after I interviewed with him. Punk ass hoe.'
      }
    ]
  }

  return (<div className='blog-div'>
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
            image = {blog.image}
            color = {'lightgray'}
            index = {index}
            key = {index}/>
        )
      })}
    </div>
    <Footer/>
  </div>)
}
export default Blog;
