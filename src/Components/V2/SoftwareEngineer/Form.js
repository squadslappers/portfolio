import React, {useState} from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (<div id='form'>
    <h3>READY TO BE MY NEXT SUCCESS STORY?</h3>
    <span>Let's talk more about the value I can add to your company.</span>
    <div className='form-container'>
      <span>Name</span>
      <input/>
    </div>
    <div className='form-container'>
      <span>Company</span>
      <input/>
    </div>
    <div className='form-container'>
      <span>Email</span>
      <input/>
    </div>
    <div className='form-container'>
      <span>Phone</span>
      <input/>
    </div>
  </div>)
}
export default Form;
