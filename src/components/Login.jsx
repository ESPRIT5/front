
import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';
import add from '../assets/add.png'
import sel from '../assets/sel.png'
import pass from '../assets/pass.png'
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';

export default function Login(){
  const options = [
    { label: '', value: '' },
    { label: 'Student', value: 'Student' },
    { label: 'Teacher', value: 'Teacher' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
    const navig = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isHovered, setIsHovered] = useState(true); 

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };
  
  const  inputContainer1= {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    height: 40,
    borderColor: '#2980B9',
    borderBottomWidth: 1,
    outline: 'none',
  };
  const cardStyles = {
    border: '2px solid #e74c3c',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)', 
    padding: '20px',
    backgroundColor: '#ffffff',
    maxWidth: '350px',
    height: '500px',
    position: 'absolute',
    width: '350px',
    left: '550px',
    top: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000000',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    
  };

  const textStyle = {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: -20,
    top: 0,
  };
  const input = {
    width: '75%',
    borderWidth: 0,
    color: 'black',
    paddingLeft: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'red',
    fontSize: 16,
    paddingBottom: 10,
    outline: 'none',
    position: 'relative',
    marginBottom: 50, 
  };



    return(
        <div>
            <img src={logo} alt="logo" className="animat-log"/>
            <div
      className="card4"
      style={cardStyles}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="card4-content">
        <h2>LOG<span style={{color: 'red'}}>IN</span></h2>
       <img src={add} className='dheb'/>
       <img src={pass} id='gigi'/>

         
        <input
          style={input}
          placeholder="Email ID"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<div>
<input
          style={input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <img src={sel} id='gi'/>
        <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder=""
        styles={{
          control: (provided) => ({
            ...provided,
            height: 40,
            left:20,
            width: '79%',
            top:-15,
            marginBottom: 20,
            borderBottomWidth: 1,
            borderColor: '#D31919',
            borderWidth: 0,
          }),
        }}
      />

</div>
           
           <button className='bata' onClick={()=>{navig('/teachers')}}>
            Log <span >In</span></button>

            <p>New to the App? <Link className='register-link' to='/signUp'>Register</Link></p>
       
      </div>
      </div>
       
      
     

        </div>
    )
}