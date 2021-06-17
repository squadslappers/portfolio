import React from 'react';

import Square from './Square';

import AD from '../../styles/NewPortfolio/assets/Icons/AD.png';
import Camera from '../../styles/NewPortfolio/assets/Icons/Camera.png';
import Email from '../../styles/NewPortfolio/assets/Icons/Email.png';
import Lightbulb from '../../styles/NewPortfolio/assets/Icons/Lightbulb.png';
import Laptop from '../../styles/NewPortfolio/assets/Icons/Laptop.png';
import Twitter from '../../styles/NewPortfolio/assets/Logos/Twitter.png';

const Home = props => {

// ===== ===== DATA BEG ===== =====
  
  
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  const navigation = <div className='home_navigation'>
    <Square title='business strategy' src={Lightbulb} alt="Lightbulb Icon" active={false}/>
    <Square title='software engineering' src={Laptop} alt="Laptop Icon" active={true}/>
    <Square title='content creation' src={Camera} alt="Camera Icon" active={false}/>
    <Square title='social media' src={Twitter} alt="Twitter Icon" active={false}/>
    <Square title='paid ads' src={AD} alt="AD Icon" active={false}/>
    <Square title='email campaigns' src={Email} alt="Email Icon" active={false}/>
  </div>
  
// ===== ===== 'COMPONENTS' END ===== =====

return <div className='home'>
  
  {navigation}

</div>
}

export default Home;