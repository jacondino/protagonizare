import Link from "next/link";
import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import cate from "../../public/cate.png";
import { CursoData } from "./cursoDate";
import "./style.scss";

const colors = ["#BE00EE", "#00E2BA", "#FAB401", "#03AFE5"];
let color = 0;

const CursosPage = () => {
  return (
    <div className="headerCurso">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Categorias</Breadcrumb.Item>
      </Breadcrumb>
      <Container fluid className="headCurso">
        <Row>
          <Col>
            <h2>Categorias</h2>
            <span>
              Aqui você encontra uma lista com várias categorias de conteúdos
              que você pode aprender.
            </span>
          </Col>
          <Col>
            <div className="imgCat">
              <img src={cate} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          {CursoData.map((item) => {
            let result = (
              <Col sm={3}>
                <a
                  href={`/categoria/${item.id}`}
                  className="boxCat"
                  style={{
                    background: `${colors[color]}`,
                  }}
                >
                  <h4>{item.descricao}</h4>
                </a>
              </Col>
            );

            if (color == 3) {
              color = 0;
              colors.reverse();
            } else {
              color++;
            }

            return result;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CursosPage;
