import React, { useState } from "react";
import './styles.css';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Email: ', email)
    console.log('Password: ', password)
    console.log('evento disparado')
  }

  return(
    <div id="login">
      <h1 className="title">Login</h1>
      <form action="" className="form">
        <div className="field">
          <label htmlFor="email">E-mail:</label>
          <input
           type="email" 
           name="email" 
           id="email" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
        </div>
        <div className="field">
          <label htmlFor="password">Senha:</label>
          <input
           type="password" 
           name="password" 
           id="password" 
           value={password} 
           onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="actions">
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;