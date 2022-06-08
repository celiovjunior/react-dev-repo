import React from "react";
import './styles.css';

function LoginPage() {
  return(
    <div id="login">
      <h1 className="title">Login</h1>
      <form action="" className="form">
        <fieldset className="field">
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" />
        </fieldset>
        <fieldset className="field">
          <label htmlFor="password">Senha:</label>
          <input type="password" name="password" id="password" />
        </fieldset>
        <div className="actions">
          <button>Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;