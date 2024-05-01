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
                    placeholder="Enter  name"
                    defaultValue="Antibiotics"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative "
                  controlId="validationTooltip01"
                >
                  <Form.Label>Shortcut</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter shortcut"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center"></Row>
            <Row className="align-items-center">
              <Col className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative "
                  controlId="validationTooltip01"
                >
                  <Form.Label>Shortcut Commercial Name</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    style={{ height: "100px" }}
                    placeholder="Enter Shortcut Commercial Name"
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

const AddAntibiotics = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Antibiotics", path: "/apps/antibiotics" },
          { label: "Create", path: "/apps/antibiotics/add", active: true },
        ]}
        title={"Create Antibiotic"}
      />

      <Row>
        <Col lg={12}>
          <NormalFormValidation />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddAntibiotics;
