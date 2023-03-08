import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";

const CoursesData = [
  {
    number: "1",
    sub: "Ona tili",
    teach: "Kenjayeva I",
    date: "Dushanba-Chor",
  },
];

const Courses = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100">
                <h2>To'garaklar</h2>
                <p>
                  33-maktab tomonidan tashkil etilgan to'garaklar haqida
                  ma'lumotlar.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">T/R</th>
              <th scope="col">Fan Nomi</th>
              <th scope="col">Fan O'qituvchisi</th>
              <th scope="col">Dars Vaqti</th>
            </tr>
          </thead>

          {CoursesData.map((item, index) => (
            <tbody>
              <tr>
                <th scope="row">{item.number}</th>
                <td>{item.sub}</td>
                <td>{item.teach}</td>
                <td>{item.date}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </Container>
    </section>
  );
};
export default Courses;
