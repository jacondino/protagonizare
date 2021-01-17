import React from 'react'
import './style.scss'

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
            <button>começar</button>
          </div>
        </section>

        <section id="rights" className="rights" >
          <div className="section-image"></div>
          <div style={{ marginTop: '-70px' }} className="section-content">
            <h1>Conheça seus direitos</h1>
            <p>Após o oitavo mês da gravidez e durante o período da licença-maternidade, a jovem tem o direito de continuar estudando em casa</p>
            <a href="#">Lei Federal 6.202/75.</a> <br/>
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
            <p>A Wings é uma plataforma colaborativa que permite que você, mãe jovem, tenha acesso a conteúdos importantes para seu desenvolvimento pessoal e profissional. ESCREVER MELHOR SOBRE ISSAQUI.</p>
            <button>começar</button>
          </div>
        </section>


      </div>
    );
  }

}

export default HomePage;
