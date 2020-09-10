import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../Header/Header';
import MiniHeader from '../../MiniHeader/MiniHeader';
import ExtraInfo from '../ExtraInfo';
import TLDR from '../TLDR';
import BlogFooter from '../BlogFooter';
import Footer from '../../Footer/Footer';

const SuckAtCoding = (props) => {
  return (<div id='blog-div'>
    <Header title='BLOG' alt='squid-logo'/>
    <MiniHeader title='HOW TO SUCK AT CODING'/>
    <div id='blog-content'>
      <TLDR tldr="There is a right way and a wrong way to suck at coding, and the difference lies in your willingness to recognize, take responsibility for, and learn from your mistakes."/>

    </div>
    <BlogFooter/>
    <Footer/>
  </div>)
}

export default withRouter(SuckAtCoding);
