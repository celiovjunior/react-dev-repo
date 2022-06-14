import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Repositories from "../../components/Repositories";
import Search from "../../components/Search";
import { getRepositories, createRepository } from "../../services/api";
import './styles.css';

const userId = '629eae5b5032a43d07bdadba'

function MainPage() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = '') => {
    try {
      const response = await getRepositories(userId);
      setRepositories(response.data);
      setLoading(false);
    } catch(err) {
      console.error(err);
      setLoadingError(true);
    }
    
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

  const handleNewRepo = async (url) => {
    console.log('new repo: ', url)
    try {
      await createRepository(userId, url);
      await loadData();
    } catch (err) {
      console.error(err);
      setLoadingError(true)
    }
  }

  if(loading) {
    return(
      <div className="loading">
        Carregando...
      </div>
    )
  }

  if(loadingError) {
    return(
      <div className="loading">
        Erro ao carregar os dados do repositório. <Link to="/login">Voltar</Link>
      </div>
    )
  }

  return(
    <div id="main">
      <Nav onLogout={handleLogout} />

      <Search onSearch={handleSearch} />
      
      <Repositories 
        repositories={repositories}
        onDeleteRepo={handleDelete}
        onNewRepo={handleNewRepo}
      />
    </div>
  )
}

export default MainPage;