import React from 'react'
import './style.scss'
import { withRouter } from "next/router";

class SingupPage extends React.Component {

  render() {
    return (
      <div className="page-singup">
        <div className="content">
          <h1>Olá! :)</h1>
          <p>Cadastre-se para acessar a plataforma</p>
          <form action="">
            <div className="field">
              <label for="">Nome</label>
              <input type="text" placeholder="digite aqui o seu nome" />
            </div>
            <div className="field">
              <label for="">Seu e-mail</label>
              <input type="email" placeholder="exemplo@email.com" />
            </div>
            <div className="field">
              <label for="">Sua senha</label>
              <input type="password" placeholder="pelo menos 8 caracteres" />
            </div>
            <div className="field">
              <label for="">Confirme sua senha</label>
              <input type="password" placeholder="digite novamente" />
            </div>
            <div className="button">
              <a href="/home">entrar</a>
            </div>
            <div className="to-singup">
              <p>Já possui uma conta?</p>
              <p>Então faça <a href="/login">login</a></p>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(SingupPage);
