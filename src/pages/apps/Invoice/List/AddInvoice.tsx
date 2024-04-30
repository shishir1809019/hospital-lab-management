import React, { useState } from "react";
import FeatherIcons from "feather-icons-react";
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
import PageTitle from "../../../../components/PageTitle";

// components

const NormalFormValidation = () => {
  const [validated, setValidated] = useState<boolean>(false);
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
                <Form.Group
                  className="position-relative mb-3"
                  controlId="citySelection"
                >
                  <Form.Label>Select Branch</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      as="select"
                      required
                      defaultValue="Choose..."
                      className="position-relative"
                    >
                      <option disabled>Choose...</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                      <option>Chicago</option>
                      <option>Houston</option>
                      <option>Phoenix</option>
                      <option>Philadelphia</option>
                      <option>San Antonio</option>
                      <option>San Diego</option>
                      <option>Dallas</option>
                      <option>San Jose</option>
                    </Form.Control>
                    <i className="icon position-absolute end-0  top-50 pe-2">
                      <FeatherIcons icon="chevron-down"></FeatherIcons>
                    </i>{" "}
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </div>
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

const AddInvoice = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Test", path: "/apps/test" },
          { label: "Create", path: "/apps/test/add", active: true },
        ]}
        title={"Create Invoice"}
      />

      <Row>
        <Col lg={12}>
          <NormalFormValidation />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddInvoice;
