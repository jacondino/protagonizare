import Link from "next/link";
import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import "./style.scss";
import "../../categorias/style.scss";
import { withRouter } from "next/router";
import img1 from "../../../public/aula1.png";
import img2 from "../../../public/aula2.png";
import img3 from "../../../public/aula3.png";
import img4 from "../../../public/aula4.png";
import pro1 from "../../../public/pro1.png";
import pro2 from "../../../public/pro2.png";
import pro3 from "../../../public/pro3.png";

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
}

const AulaPage = () => {
  return (
    <div className="headerAula">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/categorias">Categorias</Breadcrumb.Item>
        <Breadcrumb.Item active>{CursoData.descricao}</Breadcrumb.Item>
      </Breadcrumb>
      <Container fluid className="headCurso">
        <Row>
          <Col style={{ padding: 0 }}>
            <h2>{CursoData.descricao}</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {CursoData.aulas.map((item) => {
          let result = (
            <Row className="cardAula">
              <Col sm={3}>
                <img
                className="ajustaImg"
                  src={
                    item.id == 1
                      ? img1
                      : item.id == 2
                      ? img2
                      : item.id == 3
                      ? img3
                      : img4
                  }
                />
              </Col>
              <Col sm={5} className="ajustaDescri">
                <h4 className="tituloAula">{item.titulo}</h4>
                <span className="autorAula">{item.autor}</span>
                <span className="descriAula">{item.descricao}</span>
              </Col>
              <Col sm={2}>
                {!(item.id == 1) && <img src={item.id == 3 ? pro2 : item.id == 2 ? pro1 : pro3} />}
              </Col>
              <Col sm={2} className="boxButtonAula">
                <a className="buttonAula" href={`/aula/${item.id}`}>
                  continuar
                </a>
              </Col>
            </Row>
          );

          return result;
        })}
      </Container>
    </div>
  );
};

export default withRouter(AulaPage);
