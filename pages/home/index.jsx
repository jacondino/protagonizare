import React from 'react'
import './style.scss'
import { withRouter } from "next/router";

class HomePage extends React.Component {

  componentDidMount() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });

  }

  render() {
    return (
      <div>

        <section id="welcome" className="welcome" >
          <div className="section-content">
            <h1>Que bom ter você por aqui! :)</h1>
            <p>A Wings é uma plataforma colaborativa que permite que você, mãe jovem, tenha acesso a conteúdos importantes para seu desenvolvimento pessoal e profissional.</p>
            <div className="button">
              <a href="/login">começar</a>
            </div>
          </div>
        </section>

        <section id="rights" className="rights" >
          <div className="section-image"></div>
          <div style={{ marginTop: '-70px' }} className="section-content">
            <h1>Conheça seus direitos</h1>
            <p>Após o oitavo mês da gravidez e durante o período da licença-maternidade, a jovem tem o direito de continuar estudando em casa</p>
            <a href="http://www.planalto.gov.br/ccivil_03/LEIS/1970-1979/L6202.htm" target="_blank">Lei Federal 6.202/75.</a> <br/>
          </div>
        </section>

        <section id="assistance" className="assistance" >
          <div className="section-content">
            <h1>Encontre o(a) assistente social mais perto de você</h1>
            <p>A Wings é uma plataforma colaborativa que permite que você, mãe jovem, tenha acesso a conteúdos importantes para seu desenvolvimento pessoal e profissional.</p>
          </div>
          <div className="section-image"></div>
        </section>

        <section id="learn" className="learn" >
          <div className="section-image"></div>
          <div className="section-content">
            <h1>O que você pode aprender com a Wings?</h1>
            <p>A Wings é uma plataforma colaborativa que permite que você, mãe jovem, tenha acesso a conteúdos importantes para seu desenvolvimento pessoal e profissional.</p>
            <div className="button">
              <a href="/login">começar</a>
            </div>
          </div>
        </section>


      </div>
    );
  }

}

export default withRouter(HomePage);
