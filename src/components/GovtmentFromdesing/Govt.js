import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./govt.css";
const Govt = () => {
  return (
    <div>
      <Container>
        <div className="mainsection">
          <form>
            <div className="fromMain">
              <Row>
                <Col md={4}>hello</Col>
                <Col md={8}>hoose</Col>
              </Row>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Govt;
