import React from "react";
import Nav from "../../components/Nav";
import Repositories from "../../components/Repositories";
import Search from "../../components/Search";
import './styles.css';

function MainPage() {
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