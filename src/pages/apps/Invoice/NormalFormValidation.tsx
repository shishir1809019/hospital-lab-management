import React, { useState } from "react";
import FeatherIcons from "feather-icons-react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { branches, clientCodes, clientNames, doctorNames } from "./data";
import TestCulture from "./TestCulture";

// components
const NormalFormValidation = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col className="">
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
                    {branches.map((branch, index) => (
                      <option>{branch}</option>
                    ))}
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
        </Card.Body>
      </Card>{" "}
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Form.Label>Patient Info</Form.Label>
            <hr />
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Code</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    as="select"
                    required
                    defaultValue="Choose..."
                    className="position-relative"
                  >
                    <option disabled>Choose...</option>
                    {clientCodes.map((client: any, index) => (
                      <option>{client}</option>
                    ))}
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
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Name</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    as="select"
                    required
                    defaultValue="Choose..."
                    className="position-relative"
                  >
                    <option disabled>Choose...</option>
                    {clientNames.map((branch, index) => (
                      <option>{branch}</option>
                    ))}
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
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Date of birth</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    required
                    defaultValue=""
                    className="position-relative"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Phone</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    required
                    defaultValue=""
                    className="position-relative"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Email</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    required
                    defaultValue=""
                    className="position-relative"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Gender</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    required
                    defaultValue=""
                    className="position-relative"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Address</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    required
                    defaultValue=""
                    className="position-relative"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
            <Col className="">
              <Form.Group
                className="position-relative mb-3"
                controlId="citySelection"
              >
                <Form.Label>Name</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    as="select"
                    required
                    defaultValue="Choose..."
                    className="position-relative"
                  >
                    <option disabled>Choose...</option>
                    {doctorNames.map((branch, index) => (
                      <option>{branch}</option>
                    ))}
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
        </Card.Body>
      </Card>
    </>
  );
};

export default NormalFormValidation;
