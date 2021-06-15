import React from 'react';

import Example from './Example';

const SoftwareEngineering = props => {

// ===== ===== DATA BEG ===== =====
  
  const data = {
    cleanInAJiff: {
      contributions: [
        {src: 'src', alt: 'alt', title: 'Development'},
        {src: 'src', alt: 'alt', title: 'Maintenance'},
        {src: 'src', alt: 'alt', title: 'Optimization'},
        {src: 'src', alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: 'src', alt: 'alt', title: 'Google Firebase'},
        {src: 'src', alt: 'alt', title: 'React'},
        {src: 'src', alt: 'alt', title: 'Maintenance'},
      ]
    },
    portfolio: {
      contributions: [
        {src: 'src', alt: 'alt', title: 'Development'},
        {src: 'src', alt: 'alt', title: 'Maintenance'},
        {src: 'src', alt: 'alt', title: 'Optimization'},
        {src: 'src', alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: 'src', alt: 'alt', title: 'Google Firebase'},
        {src: 'src', alt: 'alt', title: 'React'}
      ]
    },
    qualityCarpentry: {
      contributions: [
        {src: 'src', alt: 'alt', title: 'Development'},
        {src: 'src', alt: 'alt', title: 'Maintenance'},
        {src: 'src', alt: 'alt', title: 'Optimization'},
        {src: 'src', alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: 'src', alt: 'alt', title: 'Google Firebase'},
        {src: 'src', alt: 'alt', title: 'React'}
      ]
    },
    retailConsultingTeam: {
      contributions: [
        {src: 'src', alt: 'alt', title: 'Development'},
        {src: 'src', alt: 'alt', title: 'Maintenance'},
        {src: 'src', alt: 'alt', title: 'Optimization'},
        {src: 'src', alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: 'src', alt: 'alt', title: 'WordPress'}
      ]
    },
    samuelJakePhotography: {
      contributions: [
        {src: 'src', alt: 'alt', title: 'UX / UI Design'}
      ],
      langTech: [
        {src: 'src', alt: 'alt', title: 'Squarespace'}
      ]
    },
    slideTech: {
      contributions: [
        {src: 'src', alt: 'alt', title: 'title'}
      ],
      langTech: [
        {src: 'src', alt: 'alt', title: 'title'}
      ]
    },
    woBaby: {
      contributions: [
        {src: 'src', alt: 'alt', title: 'title'}
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
  
  <Example title="Clean in a Jiff" data={data.cleanInAJiff}/>
  <Example title="Portfolio" data={data.portfolio}/>
  <Example title="Quality Carpentry" data={data.qualityCarpentry}/>
  <Example title="Retail Consulting Team" data={data.retailConsultingTeam}/>
  <Example title="Samuel Jake Photography" data={data.samuelJakePhotography}/>
  <Example title="SlideTech" data={data.slideTech}/>
  <Example title="WoBaby" data={data.woBaby}/>
  
</div>
}

export default SoftwareEngineering;