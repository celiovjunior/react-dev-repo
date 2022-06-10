import React, { useState } from 'react';
import './style.css';

function Search({ onSearch, onClear }) {
  const [query, setQuery] = useState('');


  return(
    <div className="search">
      <label htmlFor="query">Procurar:</label>
      <input
       type="search" 
       name="query" 
       id="query" 
       value={query} 
       onChange={(e) => setQuery(e.target.value)} 
      />
      <button className="btn" onClick={() => onSearch(query)}>Procurar</button>
      <button className="btn" onClick={onClear}>Limpar</button>
    </div>

  )
}

export default Search;