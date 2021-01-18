import Link from "next/link";
import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import "./style.scss";
import "../../categorias/style.scss";
import { withRouter } from "next/router";
import voltar from "../../../public/voltar.png";
import star from "../../../public/star.png";
import starzero from "../../../public/starzero.png";
import ReactStars from "react-rating-stars-component";

const CursoData = {
  id: 1,
  descricao: 'LinkedIn',
  aulas: [{
      id: 1,
      autor: 'Ana Clára',
      img: '/public/aula1.png',
      titulo: 'LinkedIn: por onde começar?',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ante sit amet erat ornare fringilla. Nullam hendrerit lorem metus, sed accumsan nisl gravida non amet nisl in, aliquam blandit sem.'
  },{
      id: 2,
      autor: 'Ana Clára',
      img: '../../../public/aula1.png',
      titulo: 'Por que usar o LinkedIn?',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ante sit amet erat ornare fringilla. Nullam hendrerit lorem metus, sed accumsan nisl gravida non amet nisl in, aliquam blandit sem.'
  },
  {
      id: 3,
      autor: 'Ana Clára',
      img: '../../../public/aula1.png',
      titulo: 'O que colocar no seu perfil do LinkedIn',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ante sit amet erat ornare fringilla. Nullam hendrerit lorem metus, sed accumsan nisl gravida non amet nisl in, aliquam blandit sem.'
  },
  {
      id: 4,
      autor: 'Ana Clára',
      img: '../../../public/aula1.png',
      titulo: 'Como se destacar com o LinkedIn',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ante sit amet erat ornare fringilla. Nullam hendrerit lorem metus, sed accumsan nisl gravida non amet nisl in, aliquam blandit sem.'
  }],
};

const AulasPage = () => {
  return (
    <div className="headerAulas">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/categorias">Categorias</Breadcrumb.Item>
        <Breadcrumb.Item active>LinkedIn</Breadcrumb.Item>
      </Breadcrumb>
      <Container fluid className="headCurso">
        <Row>
          <Col style={{ padding: 0 }}>
            <div className="botaoVoltar">
              <Link href="/categoria/3">
                <a>
                  <img src={voltar} />
                </a>
              </Link>
              <h2>LinkedIn: por onde começar?</h2>
            </div>
            <div className="autorAulas">
              <span>Ana Clara</span>
              <img src={star} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="iframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FM_Kzmf2gZA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="avalie">
          <span>Avalie esa aula:</span>
          <ReactStars
            count={5}
            //onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      </Container>
    </div>
  );
};

export default withRouter(AulasPage);
