import React from 'react'
import './style.scss'
import { withRouter } from "next/router";

class LoginPage extends React.Component {

  render() {
    return (
      <div className="page-login">
        <div className="content">
          <h1>Olá! :)</h1>
          <p>Faça login para acessar a plataforma</p>
          <form action="">
            <div className="field">
              <label for="">Seu e-mail</label>
              <input type="email" placeholder="exemplo@email.com" />
            </div>
            <div className="field">
              <label for="">Sua senha</label>
              <input type="password" placeholder="pelo menos 8 caracteres" />
            </div>
            <div className="button">
              <a href="/home">entrar</a>
            </div>
            <div className="to-singup">
              <p>Ainda não tem cadastro?</p>
              <a href="/cadastro">Cadastre-se aqui</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(LoginPage);
