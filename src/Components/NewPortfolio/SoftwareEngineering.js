import React from 'react';

import Example from './Example';

import AWS from '../../styles/NewPortfolio/assets/Logos/AWS.png';
import Development from '../../styles/NewPortfolio/assets/Logos/Development.png';
import Figma from '../../styles/NewPortfolio/assets/Logos/Figma.png';
import Firebase from '../../styles/NewPortfolio/assets/Logos/Firebase.png';
import Lambda from '../../styles/NewPortfolio/assets/Logos/Lambda.png';
import Maintenance from '../../styles/NewPortfolio/assets/Logos/Maintenance.png';
import Optimization from '../../styles/NewPortfolio/assets/Logos/Optimization.png';
import ReactLogo from '../../styles/NewPortfolio/assets/Logos/React.png';
import Sass from '../../styles/NewPortfolio/assets/Logos/Sass.png';
import UXUI from '../../styles/NewPortfolio/assets/Logos/UXUI.png';
import WordPress from '../../styles/NewPortfolio/assets/Logos/WordPress.png';
import Yoast from '../../styles/NewPortfolio/assets/Logos/Yoast.png';

const SoftwareEngineering = props => {

// ===== ===== DATA BEG ===== =====
  
  const data = {
    cleanInAJiff: {
      contributions: [
        {
          src: Development,
          alt: 'alt', 
          title: 'Development',
          details: 'I made this entire website from start to finish.'},
        {
          src: Maintenance,
          alt: 'alt', 
          title: 'Maintenance',
          details: 'I currently update and maintain this website.'
        },
        {src: Optimization,
          alt: 'alt',
          title: 'Optimization',
          details: 'I am responsible for optimizing the performance of this website.'
        },
        {src: UXUI,
          alt: 'alt',
          title: 'UX / UI Design',
          details: 'I worked with my clients to design this website based on their specifications.'
        }
      ],
      langTech: [
        {
          src: Figma,
          alt: 'Figma Logo',
          title: 'Figma',
          details: 'I designed this website using Figma.'
        },
        {
          src: Firebase,
          alt: 'Firebase Logo',
          title: 'Google Firebase',
          details: 'I hosted this project using Google Firebase.'
        },
        {
          src: ReactLogo,
          alt: 'React Logo',
          title: 'React',
          details: 'I made this website using React.'
        },
        {
          src: Sass,
          alt: 'Sass Logo',
          title: 'Sass',
          details: 'I styled this website using Sass.'
        }
      ]
    },
    portfolio: {
      contributions: [
        {
          src: Development,
          alt: 'alt',
          title: 'Development',
          details: 'I made this entire website from start to finish.'
        },
        {
          src: Maintenance,
          alt: 'alt',
          title: 'Maintenance',
          details: 'I currently update and maintain this website.'
        },
        {
          src: Optimization,
          alt: 'alt',
          title: 'Optimization',
          details: 'I am responsible for optimizing the performance of this website.'
        },
        {
          src: UXUI,
          alt: 'alt',
          title: 'UX / UI Design',
          details: 'I designed this entire website from start to finish.'
        }
      ],
      langTech: [
        {
          src: Figma, 
          alt: 'Figma Logo', 
          title: 'Figma', 
          details: 'I designed this website using Figma.'
        },
        {
          src: Firebase, 
          alt: 'Firebase Logo', 
          title: 'Google Firebase', 
          details: 'I hosted this project using Google Firebase.'
        },
        {
          src: ReactLogo, 
          alt: 'React Logo', 
          title: 'React', 
          details: 'I made this website using React.'
        },
        {
          src: Sass, 
          alt: 'Sass Logo', 
          title: 'Sass', 
          details: 'I styled this website using Sass.'
        }
      ]
    },
    qualityCarpentry: {
      contributions: [
        {
          src: Development, 
          alt: 'alt', 
          title: 'Development', 
          details: 'I made this entire website from start to finish.'
        },
        {
          src: Maintenance, 
          alt: 'alt', 
          title: 'Maintenance', 
          details: 'I currently update and maintain this website.'
        },
        {
          src: Optimization, 
          alt: 'alt', 
          title: 'Optimization', 
          details: 'I am responsible for optimizing the performance of this website.'
        },
        {
          src: UXUI, 
          alt: 'alt', 
          title: 'UX / UI Design', 
          details: 'I worked with my clients to design this website based on their specifications.'
        }
      ],
      langTech: [
        {
          src: Figma,
          alt: 'Figma Logo',
          title: 'Figma',
          details: 'I designed this website using Figma.'
        },
        {
          src: Firebase,
          alt: 'Firebase Logo',
          title: 'Google Firebase',
          details: 'I hosted this project using Google Firebase.'
        },
        {
          src: ReactLogo,
          alt: 'React Logo',
          title: 'React',
          details: 'I made this website using React.'
        },
        {
          src: Sass,
          alt: 'Sass Logo',
          title: 'Sass',
          details: 'I styled this website using Sass.'
        }
      ]
    },
    retailConsultingTeam: {
      contributions: [
        {
          src: Development,
          alt: 'alt',
          title: 'Development',
          details: 'I made changes to this website after it was created.'
        },
        {
          src: Maintenance,
          alt: 'alt',
          title: 'Maintenance',
          details: 'I currently update and maintain this website.'
        },
        {
          src: Optimization,
          alt: 'alt',
          title: 'Optimization',
          details: 'I am responsible for optimizing the performance of this website.'
        },
        {
        
          src: UXUI,
          alt: 'alt',
          title: 'UX / UI Design',
          details: 'I worked with my clients to design this website based on their specifications.'
        }
      ],
      langTech: [
        {
          src: Figma,
          alt: 'Figma Logo',
          title: 'Figma',
          details: 'I designed this website using Figma.'
        },
        {
          src: WordPress,
          alt: 'WordPress Logo',
          title: 'WordPress',
          details: 'I developed this website using WordPress.'
        },
        {
          src: Yoast,
          alt: 'Yoast Logo',
          title: 'Yoast SEO',
          details: 'I implemented SEO best practices using Yoast SEO.'
        }
      ]
    },
    samuelJakePhotography: {
      contributions: [
        {
          src: UXUI,
          alt: 'alt',
          title: 'UX / UI Design',
          details: 'I worked with my client to redesign this website based on their specifications.'
        }
      ],
      langTech: [
        // {src: Squarespace, alt: 'alt', title: 'Squarespace'},
        {
          src: Figma,
          alt: 'Figma Logo',
          title: 'Figma',
          details: 'I designed this website using Figma.'
        }
      ]
    },
    slideTech: {
      contributions: [
        {
          src: Development,
          alt: 'alt',
          title: 'Development',
          details: 'I followed the instructions of the team lead to implement features from the front end to the back end and transfer functions to AWS Lambda.'
        }
      ],
      langTech: [
        {
          src: AWS,
          alt: 'AWS Logo',
          title: 'Amazon Web Services',
          details: 'This project was hosted using Amazon Web Services.'
        },
        {
          src: Lambda,
          alt: 'Lambda Logo',
          title: 'AWS Lambda',
          details: 'I was responsible for the migration of functions to AWS Lambda.'
        },
        {
          src: ReactLogo,
          alt: 'React Logo',
          title: 'React',
          details: 'I helped with this website using React.'
        },
      ]
    },
    woBaby: {
      contributions: [
        {
          src: UXUI,
          alt: 'alt',
          title: 'UX / UI Design'
        }
      ],
      langTech: [
        {
          src: 'src',
          alt: 'alt',
          title: 'title'
        }
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
  {/* <Example title="WoBaby" href='https://wobaby.com/' data={data.woBaby}/> */}
</div>
}

export default SoftwareEngineering;