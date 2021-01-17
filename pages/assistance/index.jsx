import React from 'react'
import './style.scss'
import { withRouter } from "next/router";

class AssistancePage extends React.Component {

  constructor() {
    super();
    this.state = {
      estados: [],
      cidades: [],
      selected: {},
      assistentes: []
    }

    this.handleChangeEstado.bind(this);
    this.handleChangeCidade.bind(this);

  }

  handleChangeEstado(event) {
    let selected = this.state.selected;
    selected.estado = event.target.value;
    
    const cidades = this.state.estados.find(estado => estado.sigla === selected.estado ).cidades;
    console.log(cidades);
    this.setState({ selected, cidades });
  }

  handleChangeCidade(event) {    
    let selected = this.state.selected;
    selected.cidade = event.target.value;
    this.setState({ selected });
  }

  handleOnClick(event) {
    this.setState({
      assistentes: [
        {
          nome: 'Maria Dilurdes',
          telefone: '51 98215-4886',
          email: 'dilurder@gmail.com'
        },
        {
          nome: 'Fernando Moraes',
          telefone: '51 97315-4186',
          email: 'moraes@gmail.com'
        }
      ]
    })
  }

  componentDidMount() {

    fetch('https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json')
      .then((response) => response.json())
      .then(data => {

        const cidades = data.estados.find(estado => estado.sigla === 'RS')
        this.setState({
          estados: data.estados,
          cidades: cidades
        })
      })
      .catch(e => {
        console.error(e)
      })

  }


  render() {
    return (
      <div className="page-assistance">
        <div className="content">
          <h1>Olá! :)</h1>
          <p>Faça login para acessar a plataforma</p>
          <form action="">
            <div className="field">
              <label for="estadp">Estado</label>
              <select value={this.state.selected.estado} name="estado" id="estado" onChange={(event) => this.handleChangeEstado(event)}>
                <option  value="">Selecione</option>

                { this.state.estados.length && this.state.estados.map(estado => (
                  <option value={estado.sigla}>{estado.nome}</option>  
                ))}

              </select>
            </div>
            <div className="field">
              <label for="cidade">Cidade</label>
              <select onChange={(event) => this.handleChangeCidade(event)} disabled={!this.state.selected.estado} name="estado" id="estado" >
                <option value="Selecione">Selecione</option>

                { this.state.cidades.length && this.state.cidades.map(cidade => (
                  <option value={cidade}>{cidade}</option>  
                ))}

              </select>
            </div>
            <div className="button" >
              <a onClick={(event => this.handleOnClick(event))} href="#">procurar</a>
            </div>
          </form>
          <div className="result">

            { this.state.assistentes && this.state.assistentes.map(assistance => (
              <div className="assistance">
                  <h4>{assistance.nome}</h4>
                  <div className="contact">
                    <span>{assistance.telefone}</span>
                    <span>{assistance.email}</span>
                  </div>
              </div>  
            ))}
            
          </div>
        </div>
      </div>
    );
  }
 
}

export default withRouter(AssistancePage);
