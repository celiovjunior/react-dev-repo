import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Repositories from "../../components/Repositories";
import Search from "../../components/Search";
import { getRepositories } from "../../services/api";
import './styles.css';

const userId = '628d32f560b0c4462b9749e6'

function MainPage() {
  const [repositories, setRepositories] = useState([]);

  const loadData = async (query = '') => {
    const response = await getRepositories(userId);

    setRepositories(response.data);
  }

  useEffect(() => {
    // função anônima para execução do loadData, já que o useEffect não executa async-await de fora
    (async () => await loadData())();
  }, []);

  const handleLogout = () => {
    console.log('saiu do sistema')
  }

  const handleSearch = (query) => {
    console.log('query: ', query)
  }

  const handleDelete = (repository) => {
    console.log('deletou: ', repository)
  }

  const handleNewRepo = (url) => {
    console.log('adicionou novo repo')
  }

  return(
    <div id="main">
      <Nav onLogout={handleLogout} />

      <Search onSearch={handleSearch} />

      <Repositories 
        repositories={[]}
        onDeleteRepo={handleDelete}
        onNewRepo={handleNewRepo}
      />
    </div>
  )
}

export default MainPage;