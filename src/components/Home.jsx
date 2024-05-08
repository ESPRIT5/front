import React from "react";
import './Home.css'
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png'
import carde from '../assets/carde.png';
import ii from '../assets/ii.png';
import im from '../assets/im.png';

export default function Home (){
    const navig = useNavigate()
   
  return(
    <body style={{ backgroundColor: '#EEEEEE' }}>
    <div>
       <img src={logo} alt="logo" className="animat-log"/>
       <h1 className="titre">SCHOOLY <span style={{ color: 'red' }}>COURSES</span></h1>
       <div className="card">
      <div className="card-content">
        <h2>WHAT IS SCH<span style={{color: 'red'}}>OOLY</span>COURSES</h2>
        <p>SCHOOLY COURSES is a plate-forme that provides you with the opportunity to manage your courses.</p>
        <img src={carde} alt="Card Image"  />
      </div>
      
      <div className="card3">
      <div className="card-content3">
        <h2>TO THE NEXT <span style={{color: 'red'}}>STEP</span></h2>
        <p className="lekhra">Are you ready to discover our Sp<span style={{color: 'red'}}>ace ?</span></p>
        <img src={im} alt="Card Image" style={{
           position: 'absolute',
           top: 280,
           resizeMode: 'center',
           height: 60,
           width: 50,
           backgroundColor: '#fff',
           left:55,
           
        }}  /><button className="batouna"  id="loula" onClick={()=>{navig('/login')}} > Get Started</button>
      </div>
      
    </div>

    </div>
    <div className="card1">
      <div className="card-content1">
        <h2>WHAT IS SCH<span style={{color: 'red'}}>OOLY</span> ?</h2>
        <p>SCHOOLY is an innovative educational Startup that trains top talents on the latest digital skills through a hybrid learning model that combines in-person guidance and an online learning platform.</p>
        <img src={ii} alt="ii Image" className="ii" />
      </div>
      
    </div>
    </div>
    </body>
  )
}