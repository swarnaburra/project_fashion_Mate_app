import React from 'react';
import fmlogo from '../assets/fm-logo.png'


function Header() {
  return (
    <header>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        fontSize:'10px'
      }}>
        <span><img style={{paddingLeft: '10px', width: '100px', height: '100px'}} src={fmlogo} alt='FashionMate'></img></span>
        <span style={{marginLeft: 'auto', paddingLeft:'10px'}}><a href=''>Stylelens</a></span>
        <span style={{paddingLeft:'10px'}}><a href=''>Fashion quiz</a></span>
        <span style={{paddingLeft:'10px'}}><button style={{color: 'white', backgroundColor: 'black'}}>Login /Signup</button></span>
      </div>
    </header>
  );
}

export default Header;
