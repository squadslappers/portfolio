import React from 'react';

import Square from './Square';

import AD from '../../styles/NewPortfolio/assets/Icons/AD.png';
import Camera from '../../styles/NewPortfolio/assets/Icons/Camera.png';
import Email from '../../styles/NewPortfolio/assets/Icons/Email.png';
import Lightbulb from '../../styles/NewPortfolio/assets/Icons/Lightbulb.png';
import Laptop from '../../styles/NewPortfolio/assets/Icons/Laptop.png';
import Twitter from '../../styles/NewPortfolio/assets/Icons/Twitter.png';

const Home = props => {

// ===== ===== DATA BEG ===== =====
  
  
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  const navigation = <div className='home_navigation'>
    <Square title='business strategy' src={Lightbulb} alt="Lightbulb Icon"/>
    <Square title='software engineering' src={Laptop} alt="Laptop Icon"/>
    <Square title='content creation' src={Camera} alt="Camera Icon"/>
    <Square title='social media' src={Twitter} alt="Twitter Icon"/>
    <Square title='paid ads' src={AD} alt="AD Icon"/>
    <Square title='email campaigns' src={Email} alt="Email Icon"/>
  </div>
  
// ===== ===== 'COMPONENTS' END ===== =====

return <div className='home'>
  
  {navigation}

</div>
}

export default Home;