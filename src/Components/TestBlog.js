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
      <div className='blog-section'>
        <h1 className='header' id='orange'>JavaScript Can Be Confusing</h1>
        <p>
          
        </p>
        <p style={{'marginTop':'15px', 'marginBottom':'15px'}}><strong>I simplify everything.</strong></p>
        <ul>
          <li>This is cool</li>
          <li>This is cool</li>
          <li>This is cool</li>
        </ul>
        <p>This is another paragraph for your visual content needs. Isn't that neat? You can just read words because you're not an idiot.</p>
        {/* <img className='img'></img> */}
      </div>
      <div className='blog-section'>
        <h1 className='header' id='orange'>There Are Only 7 Data Types</h1>
        <p>
          And what's more, they can be categorized further:
        </p>
        <ul>
          <li>Booleans</li>
          <li>Null</li>
          <li>Undefined</li>
          <li>Numbers</li>
          <li>BigInt</li>
          <li>Strings</li>
          <li>Arrays</li>
          <li>Objects</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut egestas nunc. Fusce ultricies nec diam sit amet imperdiet. Suspendisse tristique, dolor in eleifend ornare, felis sapien volutpat ante, sed imperdiet libero ligula vitae velit. Donec sed eros efficitur, tristique ipsum non, suscipit nisl. Donec id efficitur lectus. Cras pellentesque porta purus, nec pretium justo consectetur non. Sed condimentum leo nec urna ultrices porta. Nulla finibus accumsan libero.
        </p>
      </div>
    <Link to='/'><button>View My Portfolio</button></Link>
    </div>
    <Footer/>
  </div>)
}
export default Blog;
