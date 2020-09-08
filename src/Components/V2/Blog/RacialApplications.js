import React, {useState} from 'react';
import Header from '../Header/Header';
import MiniHeader from '../MiniHeader/MiniHeader';
import ExtraInfo from './ExtraInfo';
import TLDR from './TLDR';
import BlogFooter from './BlogFooter';
import Footer from '../Footer/Footer';

const RacialApplications = (props) => {

  const [example, setExample] = useState(false);
  const [date, setDate] = useState(false);
  const [science, setScience] = useState(false);
  const [jobless, setJobless] = useState(false);
  const [scientificMethod, setScientificMethod] = useState(false);
  const [research, setResearch] = useState(false);
  const [name, setName] = useState(false);
  const [resumeInfo, setResumeInfo] = useState(false);
  const [data, setData] = useState(false);
  const [hireMe, setHireMe] = useState(false);
  const [otherResearch, setOtherResearch] = useState(false);

  const exampleComment = example
    ? <ExtraInfo
      info="Any additional information will be shown in a popup like this one. I added the X in the corner for UX/UI purposes, but clicking anywhere on the page should close the window."/>
    : null;
  const dateComment = date
    ? <ExtraInfo
      info="To illustrate this point: If I were going on a date and, before the date, said, 'How tall are you? Not that I care,' my date would likely think, 'If you really didn't care, you wouldn't be asking...'"/>
    : null;
  const scienceComment = science
    ? <ExtraInfo
      info='I am not a professional researcher, just a man who has been unemployed for far too long.'/>
    : null;
  const joblessComment = jobless
    ? <ExtraInfo
      info='Admittedly, I haven’t had much success so far. If you’re looking for a software engineer, let’s get in touch!'/>
    : null;
  const researchComment = research
    ? <ExtraInfo
      info='This is just a fancy word for “Googling a few questions and clicking on the top few links.”'/>
    : null;
  const scientificMethodComment = scientificMethod
    ? <ExtraInfo
      info='...My actual first step was Googling "what is the scientific method"...'/>
    : null;
  const nameComment = name
    ? <ExtraInfo
      info='While researching, I found that employers had been accused of profiling people based on their names, so I chose the names Greg, Brad, and James to hopefully avoid that issue.'/>
    : null;
  const resumeInfoComment = resumeInfo
    ? <ExtraInfo
      info='For things like phone numbers and addresses, I found some friends who agreed to let me use theirs.'/>
    : null;
  const dataComment = data
    ? <ExtraInfo
      info='If people are interested, I will work on formatting the actual data in a visual way so people can see it.'/>
    : null;
  const hireMeComment = hireMe
    ? <ExtraInfo
      info='I am currently looking for a web development job. Take a look at my portfolio to see if my skills match your needs!'
      link={true}/>
    : null;
  const otherResearchComment = otherResearch
    ? <ExtraInfo
      info='I am definitely not the first person to look into this issue. A quick Google search will help you find multiple articles talking about similar experiments that have found similar results.'
      link={true}/>
    : null;

  return (<div id='blog-div'>
    <Header title='BLOG'/>
    <MiniHeader title='RACIAL APPLICATIONS'/>
    <div id='blog-content'>
    <TLDR tldr="I conducted an experiment and discovered that employers are more likely to respond to a white applicant over a Black or Hispanic/Latino one with similar experience. For that reason, I think it's time to remove the question asking for an applicant's race/ethnicity on job applications."/>
      <p>
        <span className='blog-bold'>Pro tip:</span> If the text is red, that means you can click on it to see more information. <span className='blog-red' onClick={()=>setExample(example?false:true)}>Like this! {exampleComment}</span>
      </p>
      <h2>The Hypothesis</h2>
      <p>
        I have always wondered why job applications ask candidates for their race/ethnicity. It has always seemed contradictory that companies ask for that information while simultaneously claiming that they are an “equal opportunity employer.” In my opinion, <span className='blog-red' onClick={()=>setDate(date?false:true)}>if they truly didn’t care, they wouldn’t ask in the first place. {dateComment}</span> Following that logic, I figured that yes, employers ask for that information for a reason, and I bet that a person’s answer to that question actually influences a person’s chances of getting a job.
      </p>
      <p>
        After coming up with that hypothesis, I decided to do some <span className='blog-red' onClick={()=>setScience(science?false:true)}>research {scienceComment}</span> and put it to the test. So, I conducted an experiment and (spoiler alert) found evidence to support my hypothesis.
      </p>
      <h2>The Backstory</h2>
      <p>
        This January, I graduated from Devmountain’s thirteen-week, full-time web development bootcamp. Since then, <span className='blog-red' onClick={()=>setJobless(jobless?false:true)}>I have applied for hundreds of jobs across the United States. {joblessComment}</span> For the majority of 2020, applying for jobs has been my job. Needless to say, I have become well acquainted with the application process. And as a man who:
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
        <span className='blog-red' onClick={()=>setScientificMethod(scientificMethod?false:true)}>My first step {scientificMethodComment}</span> was to do a bit of <span className='blog-red' onClick={()=>setResearch(research?false:true)}>research. {researchComment}</span> It didn’t take long for me to find that my belief that a company asking for someone’s race contradicted their claim of being an equal opportunity employer was almost exactly wrong: Apparently, companies use that information for reporting purposes to ensure that candidates are, in fact, given an equal shot. Mystery solved!
      </p>
      <p>
        Well, not entirely solved. What I was off to test was a different matter entirely. Sure, employers use that information for reporting purposes, but they still have access to it. Are they influenced by it? That’s what I was trying to find out.
      </p>
      <h2>The Experiment</h2>
      <p>
        Here’s a rundown of the experiment I designed:
      </p>
      <p>
        <span className='blog-bold'>First</span>, I invented three people: One white, one Black, and one Hispanic/Latino, all of whom were males. I gave them phone numbers, emails, <span className='blog-red' onClick={()=>setName(name?false:true)}>names {nameComment} </span>, and <span className='blog-red' onClick={()=>setResumeInfo(resumeInfo?false:true)}>everything else they would need {resumeInfoComment}</span> to fill out an application.
      </p>
      <p>
        <span className='blog-bold'>Second</span>, I made three nearly identical resume templates for the three candidates. It took some trial and error, but I eventually got them to a point where I would only need to adjust a few words and phrases to make the resume match the position.
      </p>
      <p>
      <span className='blog-bold'>Third</span>, after I had met my personal goal of applying for <span className='blog-red' onClick={()=>setHireMe(hireMe?false:true)}>seven jobs a day {hireMeComment}</span>, I would look for more jobs, read the job description, edit my three candidates’ resumes to make them all fit the position in a nearly identical way, then apply.
      </p>
      <p>
      <span className='blog-bold'>Fourth</span>, for each job, I recorded which applicant got a response from the employer, and what the response was.
      </p>
      <p>
        There are a few important things to note here:
      </p>
      <ul>
        <li>The candidates were as identical as they could possibly be without being identical. For example, they often worked in the same position, only at different companies and different times. They all graduated in the same major from similar universities, etc.</li>
        <li>All I tracked was whether or not the employer replied and whether whether the response was a rejection or an offer to proceed to the next step.</li>
      </ul>
      <p>
        This continued for six months. In those six months, the three candidates applied for a total of 210 jobs each in a variety of industries: Banking, construction, management, marketing, trucking, you name it. And I kept track of who responded to whom along the way.
      </p>
      <h2>The Results</h2>
      <p>
        I had a friend of mine (a statistics major at the University of Utah) help me make sense of the <span className='blog-red' onClick={()=>setData(data?false:true)}>data. {dataComment} </span> Here are a few of the most noteworthy patterns I noticed:
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
        It appears that the evidence does support my hypothesis and that the answer to the question, <span className='blog-bold'>Does a person’s race influence their chances of getting a job?</span> appears to be <span className='blog-bold'>yes, it does.</span> <span className='blog-red' onClick={()=>setOtherResearch(otherResearch?false:true)}>Based on my data, {otherResearchComment}</span> it appears that my initial belief that I thought was disproven by Google was actually right all along: Asking for someone’s race on a job application often does, in fact, seem to contradict an employer’s claim of being an equal opportunity employer.
      </p>
      <p>
        Is it time to remove that question on job applications? I would argue that it is. If that information is needed for reporting purposes, maybe it can be asked to interviewees who have made it to the second or third rounds of the interview process to avoid what the data shows (Black and Hispanic/Latino applicants didn’t get as many responses, let alone positive ones—even when they had similar experience). What do you think?
      </p>
    </div>
    <BlogFooter/>
    <Footer/>
  </div>)
}
export default RacialApplications;
