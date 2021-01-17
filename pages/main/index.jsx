import React from 'react'
import './style.scss'
import { withRouter } from "next/router";

class MainPage extends React.Component {

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
      <div className="page-main">

        <section id="welcome" className="welcome" >
          <div className="section-content">
            <h1>Que bom ter você por aqui! :)</h1>
            <p>A Wings é uma plataforma colaborativa que permite que você, mãe jovem, tenha acesso a conteúdos importantes para seu desenvolvimento pessoal e profissional.</p>
            <div className="buttons">
              <div style={{ backgroundColor: '#BE00EE'}} className="button btn-assistance">
                <a href="/assistances">Assistentes sociais</a>
              </div>
              <div className="button">
                <a href="/categorias">Acessar aulas</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

}

export default withRouter(MainPage);
