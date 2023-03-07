import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/33school.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section id="home">
      <Container>
        <Row>
          {/* <h1>test</h1> */}
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Assalomu Aleykum <br /> 33-Maktab Veb Saytiga <br /> Xush
                Kelibsiz!
              </h2>
              <p className="mb-5">
                Ushbu veb sayt 33-o'rta ta'lim maktabi <br /> uchun maxsus tayyorlandi.<br /> Bu veb sayt orqali maktab haqida ma'lumot <br/>olishingiz mumkin.
              </p>
            </div>
            <div className="search">
              <a href="/about">
                <button className="btn">Maktab Haqida</button>
              </a>
            </div>
          </Col>

          <Col lg="6" md="6" className="hero_img">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
