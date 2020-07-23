import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Undefined from './Undefined.jpg';
import DataTypes from './DataTypes.jpg';
import BlogFooter from '../BlogFooter';

const Blog = (props) => {

  return (<div className='obligatory-div'>
    <Header title='BLOG'/>
    <div className='mini-header' id='blue-header'>
      <h1>A QUICK TIP TO SIMPLIFY JAVASCRIPT</h1>
      <span>December 31, 2020</span>
    </div>
    <div className = 'blog-content'>
      <div className='tldr'>
        TL;DR: When you're overwhelmed by JavaScript, focus on what data types you're working with and what you're doing with them.
      </div>
      <h1>JavaScript Is Confusing</h1>
      <p>
        Picture this: You’re seven functions deep in a chain of functions and you’re lost. After 4 hours of coding, this data chain is too long for you to handle. <i>Where is this function called? What is this parameter that’s being passed in? <strong>WHY IS THIS UNDEFINED?!</strong></i>
      </p>
      <p>
        We’ve all been there. JavaScript is tough. It’s complicated. It confuses even the most seasoned developers at one time or another. And if you’re a bootcamp grad like me, it was likely thrown at your face at what felt like the speed of light. So don’t beat yourself up when you don’t understand what’s happening; that’s a natural — and expected — part of the process.
      </p>
      <img className='blog-image' src = {Undefined} alt='undefined'/>
      <h1>There's Always More to Learn</h1>
      <p>
        One of the fundamental truths about development is there’s always more to learn. I think that’s one of the most beautiful things about it, and it’s the main reason I decided to become a software engineer.
      </p>
      <p>
        But it’s been said that “beauty is pain,” and that definitely applies here as well — the fact that there's <i>always</i> more to learn is also one of the most overwhelming aspects of development. And it’s up to us to either shy away from that fact or embrace it. One of the most effective ways I’ve learned to embrace it is to remember a few of the other fundamental truths.
      </p>
      <h1>"There Are Only, Like, Four Data Types!"</h1>
      <p>
        That's a direct quote from me after a revelation I had during the sixth week of web development bootcamp. Of course my number was a bit off, but that wasn’t the point — what I had just realized is another one of the fundamental truths about development:
      </p>
      <p>
        <strong>All you’re doing is working with data types, and there is a finite number of them.</strong>
      </p>
      <p>
        Up to that point, I had worked almost exclusively with...
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
      <img className='blog-image' src = {DataTypes} alt='data types'/>
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
        Everything you do in development falls into those four categories. Once I figured that out, it didn’t take long for me to put two and two together, leading to the single most helpful trick I’ve learned to find my way when I’m feeling lost:
      </p>
      <p><strong>Focus on what data types I'm working with and what I'm doing with them.</strong></p>
      <h1>Focus on the Fundamentals</h1>
      <p>
        When you’re feeling lost, confused, stuck, angry, frustrated, or any of the other emotions that come with the job, take a step back and focus on the fundamentals.
      </p>
        <p><strong>Ask yourself, "What data types am I working with, and what am I trying to do with them?"</strong>
      </p>
      <p>
        The answer to that question will serve as a simplified version of what you’re trying to accomplish:
      </p>
      <ul>
        <li><i>I’m creating a function that updates an object of numbers and returns a boolean.</i></li>
        <li><i>I’m deleting an object of user information (mostly strings with a number for the ID).</i></li>
        <li><i>I'm getting an array of objects of strings, numbers, and booleans.</i></li>
      </ul>
      <p>
        Now you have a clear objective. Now things are a little more simple and less confusing. Now you've made a little bit of progress, which is what development is all about.
      </p>
    </div>
    {/* <Footer/> */}
    <BlogFooter/>
    <Footer/>
  </div>)
}
export default Blog;
