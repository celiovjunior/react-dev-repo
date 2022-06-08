import React from "react";
import './styles.css';

function MainPage() {
  const handleLogout = () => {
    console.log('saiu do sistema')
  }

  return(
    <div id="main">
      <nav className="nav">
        <h1 className="logo">SisRepo</h1>
        <button className="btn-logout" onClick={handleLogout}>Sair</button>
      </nav>
    </div>
  )
}

export default MainPage;