import React from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./formik.css";
const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      conpassword: "",
      checkboxs: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="singupFrom ">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" onChange={formik.handleChange} value={formik.values.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={formik.handleChange} value={formik.values.password} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confrom Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="conpassword" onChange={formik.handleChange} value={formik.values.conpassword} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" name="checkboxs" onChange={formik.handleChange} value={formik.values.checkboxs} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formik;
