import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./usehooks.css";
import { useForm } from "react-hook-form";

const UseFrom = () => {
  // defolt valuse
  // const valus = {
  //   defaultValues: {
  //     name: "Md Ektiar Hossen",
  //     email: "eng.ektiar@gmail.com",
  //   },
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Container className="m-5">
        <Row>
          <Col md={12}>
            <h3 className="text-center">React js Router Hooks form </h3>
            <div className="hooksfromss ">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Name </Form.Label>
                  <Form.Control
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter name"
                    className={errors.name ? "from-control is-invalid" : "from control"}
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-danger" role="alert">
                      First name is required
                    </p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter email"
                    className={errors.email ? "from-control is-invalid" : "from control"}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-danger" role="alert">
                      email name is required
                    </p>
                  )}
                </Form.Group>
                <Form.Select {...register("gender", { required: true })} className={errors.gender ? "from-control is-invalid" : "from control"}>
                  <option>Others</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
                {errors.gender?.type === "required" && (
                  <p className="text-danger" role="alert">
                    gender name is required
                  </p>
                )}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    {...register("pass", { required: true })}
                    type="password"
                    placeholder="Password"
                    className={errors.pass ? "from-control is-invalid" : "from control"}
                  />

                  {errors.pass?.type === "required" && (
                    <p className="text-danger" role="alert">
                      Passoerd name is required
                    </p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confrom Password</Form.Label>
                  <Form.Control
                    {...register("cpass", { required: true })}
                    type="password"
                    placeholder="Confrom Password"
                    className={errors.cpass ? "from-control is-invalid" : "from control"}
                  />

                  {errors.cpass?.type === "required" && (
                    <p className="text-danger" role="alert">
                      gender name is required
                    </p>
                  )}
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UseFrom;

// className={errors.name ? "from-control is-invalid" : "from control"}

// {errors.cpass?.type === "required" && (
//   <p className="text-danger" role="alert">
//     gender name is required
//   </p>
// )}
