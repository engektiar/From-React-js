import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./froms.css";
const Govtfrom = () => {
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
      <Container>
        <h2 className="text-center">This is Govt from Pattren</h2>
        <div className="fromMain">
          <div className="fromStart">
            <div className="fromcontent">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputBox">
                  <Row>
                    <Form.Group className="mb-3 formbox">
                      <Form.Label className="fromlavel">
                        applicat's Name<span className="starticon">*</span>
                      </Form.Label>
                      <Form.Control
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Enter name"
                        className={errors.name ? "from-control is-invalid" : "from control"}
                      />
                    </Form.Group>
                    <div className="errosMassege">
                      {errors.name?.type === "required" && (
                        <p className="text-danger" role="alert">
                          First name is required
                        </p>
                      )}
                    </div>
                  </Row>
                </div>

                <div className="inputBox">
                  <Form.Group className="mb-3 formbox">
                    <Form.Label className="fromlavel">
                      Father Name<span className="starticon">*</span>
                    </Form.Label>
                    <Form.Control
                      {...register("fname", { required: true })}
                      type="text"
                      placeholder="Enter name"
                      className={errors.name ? "from-control is-invalid" : "from control"}
                    />
                  </Form.Group>
                  <div className="errosMassege">
                    {errors.fname?.type === "required" && (
                      <p className="text-danger" role="alert">
                        fname name is required
                      </p>
                    )}
                  </div>
                </div>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Govtfrom;
