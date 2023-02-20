import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import "./fromValidations.css";
import { useFormik } from "formik";
const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      conpassword: "",
      checkboxs: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "At list 2char input ").max(50, "Too long").required(),
      email: Yup.string().email("Invalied email").required(),
      password: Yup.string().password(8).required(),
      conpassword: Yup.string().password(8).required(),
      checkboxs: Yup.string().checkboxs().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // error masses hendel korara janno code start
  const nameError = formik.touched.name && formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name}</span>;

  const emailError = formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email}</span>;

  const passwordError = formik.touched.password && formik.errors.password && <span style={{ color: "red" }}>{formik.errors.password}</span>;

  const conpasswordError = formik.touched.conpassword && formik.errors.conpassword && <span style={{ color: "red" }}>{formik.errors.conpassword}</span>;

  const checkboxsError = formik.touched.checkboxs && formik.errors.checkboxs && <span style={{ color: "red" }}>{formik.errors.checkboxs}</span>;

  return (
    <div className="singupFroms">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" onChange={formik.handleChange} value={formik.values.name} required />
          {nameError}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={formik.handleChange} value={formik.values.email} required />
          {emailError}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={formik.handleChange} value={formik.values.password} required />
          {passwordError}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confrom Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="conpassword" onChange={formik.handleChange} value={formik.values.conpassword} required />
          {conpasswordError}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" name="checkboxs" onChange={formik.handleChange} value={formik.values.checkboxs} required />
          {checkboxsError}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormValidation;
