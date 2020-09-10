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
    <MiniHeader title='FIVE TIPS TO LAND YOUR FIRST CODING JOB'/>
    <div id='blog-content'>
      <TLDR tldr="1: SET YOUR GOALS. Decide where you want to work and do what it takes to get there. 2: FIT THE DESCRIPTION. Study job descriptions and use them as a guide for what you should be studying. 3: "/>
      <p>This January, I graduated from Devmountain's thirteen-week, full-time web development program. Since then, I've spent a lot of time looking for my next job in the development world. Along the way, I've had a lot of great opportunities to receive advice from a lot of incredible people:</p>
      <ul>
        <li>A bootcamp grad who quickly climbed the ladder to become a senior software engineer,</li>
        <li>A tech recruiter with over twenty years of experience working with companies like Google, Facebook, and Apple,</li>
        <li>And the COO of Vivint Solar...</li>
      </ul>
      <p>
        ...are only a few of the amazing people who have mentored me so far. Though I haven't found a coding job yet, I have made a lot of progress toward that goal, and I owe a lot of that progress to the advice I've received.
      </p>
      <p>
        In an effort to pay it forward, I'm going to share some of the tips that have helped me the most. If you're new to coding and looking to break into the development world, <span className='blog-bold'>here are five tips to help you land your first coding job.</span>
      </p>
      <h2>1: Set Your Goals</h2>
      <p>
        Applying for hundreds of jobs over the course of a few months with no success can be discouraging. It can be easy to feel like you're "scrounging for scraps," desperately applying for any and every job you can find. It's an easy habit to get into and a tough one to break.
      </p>
      <p>
        When you're feeling that way, it's time to take a step back and re-evaluate your approach. <span className='blog-bold'>It's time to set some goals.</span> I've found this approach to be helfpul:
      </p>
      <ul>
        <li><span className='blog-bold'>Write down where you want to work in five years.</span> Where do you want to work? What position do you want to hold? What languages and technologies do you want to work with? Which company do you want to work for?</li>
        <li><span className='blog-bold'>Write down a list of steps you'll need to take to get there.</span> In order to reach your five-year goal, what milestones will you need to reach to get there? Be as specific as possible as you invent your own path to where you want to be.</li>
      </ul>
      <p>
        When you start to focus on what you want to achieve, it's amazing how your job search changes. You go from staring at the floor and waiting for scraps to gazing skyward and
      </p>
    </div>
    <BlogFooter/>
    <Footer/>
  </div>)
}

export default withRouter(BlogName);
