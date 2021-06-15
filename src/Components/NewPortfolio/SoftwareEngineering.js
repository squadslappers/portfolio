import React from 'react';

import Example from './Example';

import AWS from '../../styles/NewPortfolio/assets/Logos/AWS.png';
import Development from '../../styles/NewPortfolio/assets/Logos/Development.png';
import Firebase from '../../styles/NewPortfolio/assets/Logos/Firebase.png';
import Lambda from '../../styles/NewPortfolio/assets/Logos/Lambda.png';
import Maintenance from '../../styles/NewPortfolio/assets/Logos/Maintenance.png';
import Optimization from '../../styles/NewPortfolio/assets/Logos/Optimization.png';
import ReactLogo from '../../styles/NewPortfolio/assets/Logos/React.png';
import Sass from '../../styles/NewPortfolio/assets/Logos/Sass.png';
import Squarespace from '../../styles/NewPortfolio/assets/Logos/Squarespace.png';
import UXUI from '../../styles/NewPortfolio/assets/Logos/UXUI.png';
import WordPress from '../../styles/NewPortfolio/assets/Logos/WordPress.png';
import Yoast from '../../styles/NewPortfolio/assets/Logos/Yoast.png';

const SoftwareEngineering = props => {

// ===== ===== DATA BEG ===== =====
  
  const data = {
    cleanInAJiff: {
      contributions: [
        {src: Development, alt: 'alt', title: 'Development'},
        {src: Maintenance, alt: 'alt', title: 'Maintenance'},
        {src: Optimization, alt: 'alt', title: 'Optimization'},
        {src: UXUI, alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: Firebase, alt: 'Firebase Logo', title: 'Google Firebase'},
        {src: ReactLogo, alt: 'React Logo', title: 'React'},
        {src: Sass, alt: 'Sass Logo', title: 'Sass'}
      ]
    },
    portfolio: {
      contributions: [
        {src: Development, alt: 'alt', title: 'Development'},
        {src: Maintenance, alt: 'alt', title: 'Maintenance'},
        {src: Optimization, alt: 'alt', title: 'Optimization'},
        {src: UXUI, alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: Firebase, alt: 'Firebase Logo', title: 'Google Firebase'},
        {src: ReactLogo, alt: 'React Logo', title: 'React'},
        {src: Sass, alt: 'Sass Logo', title: 'Sass'}
      ]
    },
    qualityCarpentry: {
      contributions: [
        {src: Development, alt: 'alt', title: 'Development'},
        {src: Maintenance, alt: 'alt', title: 'Maintenance'},
        {src: Optimization, alt: 'alt', title: 'Optimization'},
        {src: UXUI, alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: Firebase, alt: 'Firebase Logo', title: 'Google Firebase'},
        {src: ReactLogo, alt: 'React Logo', title: 'React'},
        {src: Sass, alt: 'Sass Logo', title: 'Sass'}
      ]
    },
    retailConsultingTeam: {
      contributions: [
        {src: Development, alt: 'alt', title: 'Development'},
        {src: Maintenance, alt: 'alt', title: 'Maintenance'},
        {src: Optimization, alt: 'alt', title: 'Optimization'},
        {src: UXUI, alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: WordPress, alt: 'WordPress Logo', title: 'WordPress'},
        {src: Yoast, alt: 'Yoast Logo', title: 'Yoast SEO'}
      ]
    },
    samuelJakePhotography: {
      contributions: [
        {src: UXUI, alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: Squarespace, alt: 'alt', title: 'Squarespace'}
      ]
    },
    slideTech: {
      contributions: [
        {src: Development, alt: 'alt', title: 'Development'}
      ],
      langTech: [
        {src: AWS, alt: 'AWS Logo', title: 'Amazon Web Services'},
        {src: Lambda, alt: 'Lambda Logo', title: 'AWS Lambda'},
        {src: ReactLogo, alt: 'React Logo', title: 'React'},
      ]
    },
    woBaby: {
      contributions: [
        {src: UXUI, alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: 'src', alt: 'alt', title: 'title'}
      ]
    }
  }
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  
  
// ===== ===== 'COMPONENTS' END ===== =====

return <div className='software-engineering'>
  
  <Example title="Clean in a Jiff" href='https://cleaninajiff.web.app/#/' data={data.cleanInAJiff}/>
  <Example title="Portfolio" data={data.portfolio}/>
  <Example title="Quality Carpentry" href='https://qualityutah.com/#/' data={data.qualityCarpentry}/>
  <Example title="Retail Consulting Team" href='https://retailconsultingteam.com/' data={data.retailConsultingTeam}/>
  <Example title="Samuel Jake Photography" href='https://samueljake.com/' data={data.samuelJakePhotography}/>
  <Example title="SlideTech" href='https://slidetech.io/#/' data={data.slideTech}/>
  <Example title="WoBaby" href='https://wobaby.com/' data={data.woBaby}/>
  
</div>
}

export default SoftwareEngineering;