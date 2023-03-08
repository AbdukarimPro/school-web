import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./contact.css";

function Contact() {
  return (
    <section className="bg-light">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-center align-items-center">
              <div className="course__top__left w-100">
                <h2>Aloqa</h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1393.1308413002!2d67.58307929928725!3d37.83393361053143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5591f6d60ec37%3A0xaadea31e00600340!2s33%20maktab!5e1!3m2!1sru!2s!4v1678188779467!5m2!1sru!2s"
              width="480"
              height="455"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg="6" md="6">
            <div className="info">
              <div className="border border-4 p-3 mb-2 rounded d-flex justify-content-start align-items-center">
                <i class="ri-phone-fill"></i>
                <h1>+998 (93) 578 20 21</h1>
              </div>
              <div className="border border-4 p-3 mb-2 rounded d-flex justify-content-start align-items-center">
              <i class="ri-mail-fill"></i>
                <h1>Abdukarimqarshiyev1@gmail.com</h1>
              </div>
              <div className="border border-4 p-3 mb-2 rounded d-flex justify-content-start align-items-center">
              <i class="ri-map-pin-fill"></i>
                <h1>Kumkurgan,Surkhandaryo,Uzbekistan</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
