import React from 'react';
import Header from './Header';
import Footer from './Footer';

import {Link} from 'react-router-dom';

const Blog = (props) => {

  return (<div className='obligatory-div'>
    <Header title='BLOG'/>
    <div className='mini-header' id='blue-header'>
      <h1>MAKING SENSE OF JAVASCRIPT</h1>
      <span>December 31, 2020</span>
    </div>
    <div className = 'blog-content'>
        <h1>JavaScript Is Confusing</h1>
        <p>
          Picture this: You’re 4 functions deep in a chain of functions and you’re lost. After 4 hours of coding, this data chain is too long for you to handle. <i>Where is this function called? What is this parameter that’s being passed in? <strong>Why is everything undefined?!</strong></i>
        </p>
        <p>
          We’ve all been there. JavaScript is tough. It’s complicated. It confuses even the most seasoned developers at one time or another. And if you’re a bootcamp grad like me, it was likely thrown at your face at what felt like the speed of light. So don’t beat yourself up when you don’t understand what’s happening; that’s a natural — and expected — part of the process.
        </p>
        <h1>There Is Always More to Learn</h1>
        <p>
          One of the fundamental truths about development is there’s always more to learn. I think that’s one of the most beautiful things about it, and it’s the main reason I decided to become a software engineer.
        </p>
        <p>
          But it’s been said that “beauty is pain,” and that definitely applies here as well — the fact that there is always more to learn is also one of the most overwhelming aspects of development.
        </p>
        <p>
        <strong>There is always more to learn.</strong> It’s worth repeating. It’s a fact, and it’s up to us to either shy away from that fact or embrace it. I’ve decided to embrace it, and one of the most effective ways I’ve learned to embrace it is to remember a few of the other fundamental truths.
        </p>
        <h1>"There Are Only, Like, Four Data Types!"</h1>
        <p>
          That is a direct quote from me after a revelation I had during the sixth week of web development bootcamp. Of course my number was a bit off, but that wasn’t the point. What I had just realized is another one of the fundamental truths about development: <strong>All you’re doing is working with data types, and there is a finite number of them.</strong> Up to that point, I had worked almost exclusively with...
        </p>
        <ul>
          <li>Numbers</li>
          <li>Strings</li>
          <li>Booleans</li>
          <li>Null</li>
          <li>Undefined (admittedly this was never on purpose)</li>
          <li>Arrays (not a data type, I know)</li>
          <li>Objects</li>
          <li>Functions (again, not a data type)</li>
        </ul>
        <p>
          And my revelation happened when I realized that arrays and objects are simply collections of the first four on the list, and functions usually return (or resolve to) any of the other data types. It was a big moment for me.
        </p>
        <h1>All You Need Is CRUD</h1>
        <p>
          When we dove into RESTful API development, I realized another one of the fundamental truths: <strong>All you can do is...</strong>
        </p>
        <ul>
          <li><strong>C</strong> reate</li>
          <li><strong>R</strong> ead</li>
          <li><strong>U</strong> pdate</li>
          <li><strong>D</strong> elete</li>
        </ul>
        <p>
          Just about everything you do in development falls into those four categories. Once I figured that out, it didn’t take long for me to put two and two together, leading to the single most helpful trick I’ve learned to find my way when I’m feeling lost.
        </p>
        <h1>Focus on the Fundamentals</h1>
        <p>
          When you’re feeling lost, confused, stuck, angry, frustrated, or any of the other emotions that come with the job, take a step back and focus on the fundamentals:
        </p>
        <ul>
          <li>There are only a few data types</li>
          <li>You can only do 4 things to those data types</li>
        </ul>
        <p>
          More specifically, I’ve found it’s helpful to <strong>ask yourself, “What data types am I working with, and what am I trying to do with them?”</strong> The answer to that question will serve as a simplified version of what you’re trying to accomplish: <i>I’m making a function that updates an object full of numbers and returns a boolean. I’m deleting an object full of user information (mostly strings with a number for the ID).</i>
        </p>
        <p>
          Now you have a clear objective. Now things are a little more simple and less confusing. Now you can embrace perhaps the most important fundamental truth about development: <strong>It’s all about making progress, one small step at a time.</strong>
        </p>
    <Link to='/'><button>View My Portfolio</button></Link>
    </div>
    <Footer/>
  </div>)
}
export default Blog;
