import React from 'react';
import Skill from './Skill';

import AdobeCreativeCloud from '../../styles/images/skills/AdobeCreativeCloud.png';
import Agile from '../../styles/images/skills/Agile.png';
import AWSLambda from '../../styles/images/skills/AWSLambda.png';
import AWSS3 from '../../styles/images/skills/AWSS3.png';
import AWSAPI from '../../styles/images/skills/AWSAPI.png';
import Axios from '../../styles/images/skills/Axios.png';
import Chartjs from '../../styles/images/skills/Chartjs.png';
import CSS from '../../styles/images/skills/CSS.png';
import Docker from '../../styles/images/skills/Docker.png';
import Express from '../../styles/images/skills/Express.png';
import Fetch from '../../styles/images/skills/Fetch.png';
import Git from '../../styles/images/skills/Git.png';
import GitHub from '../../styles/images/skills/GitHub.png';
import Heroku from '../../styles/images/skills/Heroku.png';
import HTML from '../../styles/images/skills/HTML.png';
import JavaScript from '../../styles/images/skills/JavaScript.png';
import JSON from '../../styles/images/skills/JSON.png';
import Massive from '../../styles/images/skills/Massive.png';
import Node from '../../styles/images/skills/Node.png';
import NodeMailer from '../../styles/images/skills/NodeMailer.png';
import PostgreSQL from '../../styles/images/skills/PostgreSQL.png';
import Postman from '../../styles/images/skills/Postman.png';
import ReactIcon from '../../styles/images/skills/React.png';
import Redis from '../../styles/images/skills/Redis.png';
import ReduxIcon from '../../styles/images/skills/Redux.png';
import Sass from '../../styles/images/skills/Sass.png';
import ScrumMaster from '../../styles/images/skills/ScrumMaster.png';
import SocketIcon from '../../styles/images/skills/Socketio.png';
import TablePlus from '../../styles/images/skills/TablePlus.png';
import TypeScript from '../../styles/images/skills/TypeScript.png';
import UXUI from '../../styles/images/skills/UXUI.png';

const Skills = (props) => {
  return (<div className='section black-gradient'>
    <h2>SKILLS</h2>
    <div className='skills'>
      <div className='skills__section'>
        <h3>FRONT END</h3>
        <div className='skills__grid'>
          <Skill icon={JavaScript} name='JavaScript'/>
          <Skill icon={TypeScript} name='TypeScript'/>
          <Skill icon={ReactIcon} name='React'/>
          <Skill icon={ReduxIcon} name='Redux'/>
          <Skill icon={HTML} name='HTML'/>
          <Skill icon={CSS} name='CSS'/>
          <Skill icon={Sass} name='Sass'/>
          <Skill icon={SocketIcon} name='Socket.io'/>
          <Skill icon={Chartjs} name='Chart.js'/>
          <Skill icon={UXUI} name='UX / UI'/>
        </div>
      </div>
      <div className='skills__section'>
        <h3>BACKEND</h3>
        <div className='skills__grid'>
          <Skill icon={Axios} name='Axios'/>
          <Skill icon={Fetch} name='Fetch'/>
          <Skill icon={Express} name='Express'/>
          <Skill icon={Node} name='Node'/>
          <Skill icon={Massive} name='Massive'/>
          <Skill icon={PostgreSQL} name='PostgreSQL'/>
          <Skill icon={JSON} name='JSON'/>
          <Skill icon={Redis} name='Redis'/>
          <Skill icon={NodeMailer} name='NodeMailer'/>
        </div>
      </div>
      <div className='skills__section'>
        <h3>OTHER</h3>
        <div className='skills__grid'>
          <Skill icon={Docker} name='Docker'/>
          <Skill icon={TablePlus} name='TablePlus'/>
          <Skill icon={Heroku} name='Heroku'/>
          <Skill icon={Postman} name='Postman'/>
          <Skill icon={AWSLambda} name='AWS Lambda'/>
          <Skill icon={AWSS3} name='AWS S3'/>
          <Skill icon={AWSAPI} name='AWS API'/>
          <Skill icon={Git} name='Git'/>
          <Skill icon={GitHub} name='GitHub'/>
          <Skill icon={ScrumMaster} name='Scrum Master'/>
          <Skill icon={Agile} name='Agile'/>
          <Skill icon={AdobeCreativeCloud} name='Creative Cloud'/>
        </div>
      </div>
    </div>
  </div>)
}
export default Skills;
