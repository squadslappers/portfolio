import React, {useState} from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (<div id='form'>
    <h3>LET'S GET IN TOUCH</h3>
    <span>...so we can talk more about the value I can add to your company.</span>
    <form autocomplete="off">
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
      {/* <div className='form-container'>
        <span>Phone</span>
        <input/>
      </div> */}
    </form>
  </div>)
}
export default Form;
