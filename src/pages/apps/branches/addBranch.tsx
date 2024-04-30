import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PageTitle from "../../../components/PageTitle";

// components

const NormalFormValidation = () => {
  const [inputs, setInputs] = useState([{ id: Math.random(), value: "" }]);
  const [validated, setValidated] = useState<boolean>(false);

  const handleAddInput = () => {
    setInputs(inputs.concat({ id: Math.random(), value: "" }));
  };

  const handleRemoveInput = (id: any) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="align-items-center">
              <Col className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative "
                  controlId="validationTooltip01"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative "
                  controlId="validationTooltip01"
                >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Phone Number"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative "
                  controlId="validationTooltip01"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    style={{ height: "100px" }}
                    placeholder="Enter Address"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const AddBranch = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Test", path: "/apps/test" },
          { label: "Create", path: "/apps/test/add", active: true },
        ]}
        title={"Create Branch"}
      />

      <Row>
        <Col lg={12}>
          <NormalFormValidation />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddBranch;
