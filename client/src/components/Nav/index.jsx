import React from 'react';
import './style.css';

function Nav({ onLogout }) {
  return(
    <nav className="nav">
      <h1 className="logo">SisRepo</h1>
      <button className="btn" onClick={onLogout}>Sair</button>
    </nav>
  )
}

export default Nav;