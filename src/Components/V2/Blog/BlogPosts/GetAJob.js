import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../Header/Header';
import MiniHeader from '../../MiniHeader/MiniHeader';
// import ExtraInfo from '../ExtraInfo';
import TLDR from '../TLDR';
import BlogFooter from '../BlogFooter';
import Footer from '../../Footer/Footer';

const BlogName = (props) => {
  return (<div id='blog-div'>
    <Header title='BLOG' alt='squid-logo'/>
    <MiniHeader title='3 TIPS TO LAND YOUR NEXT CODING JOB'/>
    <div id='blog-content'>
      <TLDR tldr="If you (1) decide where you want to work and what you're going to need to do to get there, (2) study job descriptions to know what you should be studying, and (3) do whatever it takes to stand out from the other applicants, you'll find a lot more success in your job search."/>
      <p>This January, I graduated from Devmountain's thirteen-week, full-time web development program. Since then, I've spent a lot of time looking for my next job in the development world. Along the way, I've had a lot of great opportunities to receive advice from a lot of incredible people:</p>
      <ul>
        <li>A bootcamp grad who quickly climbed the ladder to become a senior software engineer,</li>
        <li>A tech recruiter with over twenty years' experience working with companies like Google, Facebook, and Apple,</li>
        <li>And the COO of Vivint Solar...</li>
      </ul>
      <p>
        ...are only a few of the amazing people who have mentored me so far. Though I haven't found a coding job yet, I have made a lot of progress toward that goal, and I owe a lot of that progress to the advice I've received.
      </p>
      <p>
        In an effort to pay it forward, I'm going to share a few of the suggestions that have helped me the most (this blog post will be the first of many where I will address the advice I've been given). If you're new to coding and looking to break into the development world, <span className='blog-bold'>here are three tips to help you land your next coding job.</span>
      </p>
      <h2>1: Set Your Goals</h2>
      <p>
        Applying for hundreds of jobs over the course of a few months with no success can be discouraging. It can be easy to feel like you're "scrounging for scraps," desperately applying for any and every job you can find. It's an easy habit to get into and a tough one to break.
      </p>
      <p>
        When you're feeling that way, it's time to take a step back and re-evaluate your approach. <span className='blog-bold'>It's time to set some goals.</span> I've found this approach to be helfpul:
      </p>
      <ul>
        <li><span className='blog-bold'>Write down where you want to be in five years.</span> Where do you want to work? What position do you want to hold? What languages and technologies do you want to work with? Which company do you want to work for?</li>
        <li><span className='blog-bold'>Write down a list of steps you'll need to take to get there.</span> In order to reach your five-year goal, what milestones will you need to reach to get there? Be as specific as possible as you invent your own path to where you want to be.</li>
      </ul>
      <p>
        When you start to focus on what you want to achieve, it's amazing how your job search changes. You go from staring at the floor waiting for scraps to gazing skyward ready to blaze your own trail to reach your goals. In addition to giving your job search much more direction, it does wonders for your morale.
      </p>
      <h2>2: Fit the Description</h2>
      <p>
        One of the most common concerns for bootcamp grads is a lack of direction. There is an overwhelming number of languages and technologies to be studied, and it can be difficult to know which ones you should spend your time on.
      </p>
      <p>
        If you're struggling to know how you should be spending your time, try this trick: <span className='blog-bold'>Start studying job descriptions.</span>
      </p>
      <ul>
        <li>Are there no React jobs? Start studying Angular.</li>
        <li>Do a lot of job listings mention that experience with Python is preferred? Get on it.</li>
        <li>Are companies including experience with UX/UI design in the requirements section? Take a course on it.</li>
      </ul>
      <p>
        When you stop skimming job descriptions and start studying them, you'll realize that they are literally maps to success. They tell you exactly what you need to be studying in order to be the ideal candidate for the job.
      </p>
      <h2>3: Stand Out to Recruiters</h2>
      <p>
        <span className='blog-bold'>"Your biggest problem is that you're just not standing out to recruiters."</span> An experienced tech recruiter told me this after viewing my resume, portfolio, and LinkedIn profile. There weren't any problems with them, but there wasn't anything noteworthy about them, either. They were average. <span className='blog-bold'>And when you're applying with 300 other applicants, being average is the last thing you want.</span>
      </p>
      <p>
        As daunting a task as it may seem, standing out to recruiters can be simple. It all boils down to one simple principle: <span className='blog-bold'>Do more than just apply.</span> If you've applied for a job, congratulations! You've officially done the absolute bare minimum, just like everyone else. You can do more! You have to do more! Here are a few ideas of "more" things you can do:
      </p>
      <ul>
        <li><span className='blog-bold'>Connect on LinkedIn.</span> A good rule of thumb is to connect with at least four people from the company (I usually connect with two recruiters and two developers). Send them a message introducing yourself and expressing your interest in the role.</li>
        <li><span className='blog-bold'>Inspire the recruiters.</span> When you land an interview, look into the company and make a note of all the ways they benefit people. Talk about how much you appreciate the good the company does and how excited you would be to contribute to the cause.</li>
        <li><span className='blog-bold'>Play to your strengths.</span> If you're reading this, this tip works (I'm a writer and use this blog to provide value to others and bring traffic to my portfolio). I guarantee you all have a seemingly unrelated skill that you can use to help you get hired.</li>
      </ul>
      <h2>More Tips to Come</h2>
      <p>
        As I mentioned, these are only a few of the recommendations I have received from people who know a lot more than I do. All of the tips I've shared or will share are things that I have tried and benefitted from. <span className='blog-bold'>I encourage you to try them out,</span> as I'm confident they can help you, too. I have a whole list of them, so stay tuned for more things you can do to get hired into your next coding job.
      </p>
    </div>
    <BlogFooter/>
    <Footer/>
  </div>)
}

export default withRouter(BlogName);
