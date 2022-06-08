import React from "react";
import './styles.css';

function MainPage() {
  const handleLogout = () => {
    console.log('saiu do sistema')
  }

  const handleSearch = (query) => {
    console.log('query: ', query)
  }

  const handleClear = () => {
    console.log('limpou')
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
        <button className="btn" onClick={handleSearch}>Procurar</button>
        <button className="btn" onClick={handleClear}>Limpar</button>
      </div>

      <div className="repositories">
        <h2 className="title">Repositórios</h2>
        <ul className="list">
          <li className="item">
            <div className="info">
              <div className="owner">Nome do dono</div>
              <div className="name">Nome do repo</div>
            </div>
            <button className="btn">Deletar</button>
          </li>
          <li className="item">
            <div className="info">
              <div className="owner">Nome do dono</div>
              <div className="name">Nome do repo</div>
            </div>
            <button className="btn">Deletar</button>
          </li>
          <li className="item">
            <div className="info">
              <div className="owner">Nome do dono</div>
              <div className="name">Nome do repo</div>
            </div>
            <button className="btn">Deletar</button>
          </li>
          <li className="item">
            <div className="info">
              <div className="owner">Nome do dono</div>
              <div className="name">Nome do repo</div>
            </div>
            <button className="btn">Deletar</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainPage;