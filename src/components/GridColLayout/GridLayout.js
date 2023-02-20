import React from "react";

import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import "./grid.css";
const GridLayout = () => {
  return (
    <div>
      <Row>
        <Col md={4} className="fastside">
          hello
        </Col>
        <Col md={8} className="secoundpart">
          hello
        </Col>
      </Row>
      <Row>
        <Col md={2} className="thardpart">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
          </Form.Group>
        </Col>
        <Col md={3} className="foure">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col md={7} className="thardpart">
          hhh
        </Col>
      </Row>
    </div>
  );
};

export default GridLayout;
