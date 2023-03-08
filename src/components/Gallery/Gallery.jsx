import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "./gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CardData = [
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
  {
    title: "HEllo",
    subt: "HEllo World",
    cardImg: "https://picsum.photos/300/200",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
  },
];

function gallery() {
  return (
    <section >
      <Container data-aos="fade-up" data-aos-duration="3000">
        <Row>
          <div className="course__top d-flex justify-content-start align-items-center">
            <div className="course__top__left w-100">
              <h2>Yutuqlar</h2>
              <p>
                Maktab o'qituvchilari va o'quvchilari tomonidan oldingan
                yutuqlar.
              </p>
            </div>
          </div>

          {CardData.map((item, index) => (
            <Col lg="" md="6" key={index}>
              <Card
                data-aos="zoom-in-up"
                style={{
                  width: "18rem",
                  marginBottom: " 2rem",
                }}
              >
                <img alt="Sample" src={item.cardImg} />
                <CardBody>
                  <CardTitle tag="h5">{item.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.subt}
                  </CardSubtitle>
                  <CardText>{item.desc}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default gallery;
