import React from 'react';
import { Link } from 'react-router-dom';
import fmlogo from '../assets/fm-logo.png';

function Header() {
  return (
    <header>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        padding: '10px'
      }}>
        <span>
          <img 
            style={{ paddingLeft: '10px', width: '100px', height: '100px' }} 
            src={fmlogo} 
            alt='FashionMate' 
          />
        </span>

        <span style={{ marginLeft: 'auto', paddingLeft: '10px' }}>
          <Link to="/stylelens" style={{ textDecoration: 'none', color: 'black' }}>StyleLens</Link>
        </span>

        <span style={{ paddingLeft: '10px' }}>
          <Link to="/fashion-quiz" style={{ textDecoration: 'none', color: 'black' }}>Fashion quiz</Link>
        </span>

        <span style={{ paddingLeft: '10px' }}>
          <button style={{ color: 'white', backgroundColor: 'black' }}>Login /Signup</button>
        </span>
      </div>
    </header>
  );
}

export default Header;
