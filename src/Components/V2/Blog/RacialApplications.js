import React, {useState} from 'react';
import Header from '../Header/Header';
import MiniHeader from '../MiniHeader/MiniHeader';
import ExtraInfo from './ExtraInfo';

const RacialApplications = (props) => {

  const [date, setDate] = useState(false);
  const [science, setScience] = useState(false);

  const dateComment = date
    ? <ExtraInfo
      info="To illustrate this point: If I were going on a date and, before the date, said, 'How tall are you? Not that I care,' my date would likely think, 'If you really didn't care, you wouldn't be asking...'"/>
    : null;
  const scienceComment = science
    ? <ExtraInfo
      info='I am not a professional researcher, just a man who has been unemployed for far too long'/>
    : null;

  return (<div id='blog-div'>
    <Header title='BLOG'/>
    <MiniHeader title='COOL BLOG TITLE HERE'/>
    <div id='blog-content'>
      <h2>The Hypothesis</h2>
      <p>
        I have always wondered why job applications ask candidates for their race/ethnicity. It has always seemed contradictory that companies ask for that information while simultaneously claiming that they are an “equal opportunity employer.” In my opinion, <span className='blog-red' onClick={()=>setDate(date?false:true)}>if they truly didn’t care, they wouldn’t ask in the first place.</span> Following that logic, I figured that yes, employers ask for that information for a reason, and I bet that a person’s answer to that question actually influences a person’s chances of getting a job.
      </p>
      <p>
        After coming up with that hypothesis, I decided to do some <span className='blog-red' onClick={()=>setScience(science?false:true)}>research {scienceComment}</span> and put it to the test. So, I conducted an experiment and (spoiler alert) found evidence to support my hypothesis in the worst possible way.
      </p>
      <h2>The Back Story</h2>
      <p>
        This January, I graduated from Devmountain’s thirteen-week, full-time web development bootcamp. Since then, I have applied for hundreds of jobs across the United States (admittedly, I haven’t had any luck so far. If you’re looking for a software engineer, let’s get in touch). For the majority of 2020, applying for jobs has been my job. Needless to say, I have become well acquainted with the application process. As a man who:
      </p>
      <ul>
        <li>Was unemployed and had a lot of free time,</li>
        <li>Could fill out a job application in thirty seconds flat when he wanted to,</li>
        <li>Had always wondered why job applications ask for a potential candidate’s race,</li>
      </ul>
      <p>
        I came up with an experiment to find an answer to this question:
      </p>
      <p>
        <span className='blog-bold'>
          Does a person’s race influence their chances of getting a job?
        </span>
      </p>
      <h2>The Research</h2>
      <p>
        My first step (after Googling “what is the scientific method”)  was to do a bit of “research” (which is a fancy word for “Googling a few questions and clicking on the top few links”). It didn’t take long for me to find that my belief that a company asking for someone’s race contradicted their claim of being an equal opportunity employer was almost exactly wrong: Apparently, companies use that information for reporting purposes to ensure that candidates are, in fact, given an equal shot. Mystery solved!
      </p>
      <p>
        Well, not entirely solved. What I was off to test was a different matter entirely. Sure, employers use that information for reporting purposes, but they still have access to it. Are they influenced by it? That’s what I was trying to find out.
      </p>
      <h2>The Experiment</h2>
      <p>
        Here’s a rundown of the experiment I designed:
      </p>
      <p>
        <span className='blog-bold'>First</span>, I invented three people: One white, one Black, and one Hispanic/Latino, all of whom were males. I gave them phone numbers, emails, names, and everything else they would need to fill out an application (for things like phone numbers and addresses, I found some friends who agreed to let me use theirs).
      </p>
      <p>
        <span className='blog-bold'>Second</span>, I made three nearly identical resume templates for the three candidates. It took some trial and error, but I eventually got them to a point where I would only need to adjust a few words and phrases to make the resume match the position.
      </p>
      <p>
      <span className='blog-bold'>Third</span>, after I had met my personal goal of applying for seven jobs a day, I would look for more jobs, read the job description, edit my three candidates’ resumes to make them all fit the position in a nearly identical way, then apply.
      </p>
      <p>
      <span className='blog-bold'>Fourth</span>, for each job, I recorded which applicant got a response from the employer, and what the response was.
      </p>
      <p>
        There are a few important things to note here:
      </p>
      <ul>
        <li>The candidates were as identical as they could possibly be without being identical. For example, they often worked in the same position, only at different companies and different times. They all graduated in the same major from similar universities, etc.</li>
        <li>All I tracked was whether or not the employer replied, and if they did, whether it was a rejection or an offer to proceed to the next step (none of the three candidates ever accepted the offer).</li>
      </ul>
      <p>
        This continued for six months. In those six months, the three candidates applied for a total of 210 jobs each in a variety of industries: Banking, construction, management, marketing, trucking, you name it. And I kept track of who responded to whom along the way.
      </p>
      <h2>The Results</h2>
      <p>
        I had a friend of mine (a statistics major at the University of Utah) help me make sense of the data. If people are interested, I will work on formatting the actual data in a reasonable way so people can see it. For now, here are a few of the most noteworthy patterns I noticed:
      </p>
      <ul>
        <li>The white candidate received the most responses (45%). The Black candidate was second (37%), and the Hispanic/Latino candidate was third (35%).</li>
        <li>The white candidate received the most positive responses (60%), the Hispanic/Latino was second (52%), and the Black candidate was third (%47).</li>
      </ul>
      <p>
        Using those percentages, if a white, Black, and Hispanic/Latino with similar backgrounds were to apply for 100 of the same jobs, this is what it would look like:
      </p>
      <ul className='blog-list'>
        <li className='blog-list'>The white candidate would receive 45 emails in response, 27 of which would be positive.</li>
        <li>The Hispanic/Latino candidate would receive 35 emails in response, 18 of which would be positive.</li>
        <li>The Black candidate would receive 37 emails in response, 17 of which would be positive.</li>
      </ul>
      <h2>The Conclusion</h2>
      <p>
        It appears that the evidence does support my hypothesis and that the answer to the question, <span className='blog-bold'>Does a person’s race influence their chances of getting a job?</span> appears to be <span className='blog-bold'>yes, it does.</span> Based on this data, it appears that my initial belief that I thought was disproven by Google was actually right all along: Asking for someone’s race on a job application often does, in fact, contradict an employer’s claim of being an equal opportunity employer.
      </p>
      <p>
        Is it time to remove that question on job applications? I would argue that it is. If that information is needed for reporting purposes, maybe it can be asked to interviewees who have made it to the second or third rounds of the interview process to avoid what the data shows (Black and Hispanic/Latino applicants didn’t get as many responses, let alone positive ones—even when they had similar experience). What do you think?
      </p>
    </div>
  </div>)
}
export default RacialApplications;
