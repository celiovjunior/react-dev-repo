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
        <button className="btn" onClick={handleLogout}>Sair</button>
      </nav>

      <div className="search">
        <label htmlFor="query">Procurar:</label>
        <input type="search" name="query" id="query" />
        <button className="btn">Limpar</button>
        <button className="btn">Procurar</button>
      </div>
    </div>
  )
}

export default MainPage;