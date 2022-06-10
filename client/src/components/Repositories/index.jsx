import React, { useState } from 'react';

function Repositories({ repositories, onDeleteRepo, onNewRepo }) {
  const [ newRepo, setNewRepo ] = useState('');

  return(
    <div className="repositories">
    <h2 className="title">Repositórios</h2>
    <ul className="list">

      {
        repositories.map((repository) => (
          <li className="item" key={repository._id}>
            <div className="info">
              <div className="owner">{repository.name}</div>
              <div className="name">{repository.name}</div>
            </div>
            <button onClick={() => onDeleteRepo(null)} className="btn">Deletar</button>
          </li>
        ))
      }

    </ul>

    <div className="new">
      <label htmlFor="new-repo">Novo repositório:</label>
      <input
       type="url" 
       name="new-repo" 
       id="new-repo"
       value={newRepo}
       onChange={(e) => setNewRepo(e.target.value)}
       />
      <button onClick={() => onNewRepo(newRepo)} className="btn">Adicionar</button>
    </div>

  </div>
  )
}

export default Repositories;