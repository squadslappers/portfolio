import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../Header/Header';
import MiniHeader from '../../MiniHeader/MiniHeader';
import ExtraInfo from '../ExtraInfo';
import TLDR from '../TLDR';
import BlogFooter from '../BlogFooter';
import Footer from '../../Footer/Footer';

const BlogName = (props) => {
  return (<div id='blog-div'>
    <Header title='BLOG' alt='squid-logo'/>
    <MiniHeader title='HOW TO SUCK AT CODING'/>
    <div id='blog-content'>
      <TLDR tldr=""/>
      
    </div>
    <BlogFooter/>
    <Footer/>
  </div>)
}

export default withRouter(BlogName);
