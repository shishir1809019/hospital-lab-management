import React, { useState } from "react";
import FeatherIcons from "feather-icons-react";
import { Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { branches, clientCodes, clientNames, doctorNames } from "./data";
import TestCulture from "./TestCulture";
import InfoModal from "./Modal";

// components
const NormalFormValidation = () => {
  const [lgShow, setLgShow] = useState(false);
  const [lgShowDoctor, setLgShowDoctor] = useState(false);
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
          <div className="d-flex justify-content-between">
            <Form.Label>Patient Info</Form.Label>,
            <Button
              className="btn btn-warning btn-sm mb-2"
              onClick={() => setLgShow(true)}
            >
              {" "}
              <i className="bi bi-exclamation-triangle me-1"></i>Not Listed?
            </Button>
            <InfoModal lgShow={lgShow} setLgShow={setLgShow} />
          </div>
          <Row className="align-items-center">
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
                <div className="d-flex justify-content-between">
                  <Form.Label>Doctor</Form.Label>
                  <Button
                    className="btn btn-warning btn-sm"
                    onClick={() => setLgShowDoctor(true)}
                  >
                    {" "}
                    <i className="bi bi-exclamation-triangle me-1"></i>Not
                    Listed?
                  </Button>
                  <Modal
                    size="lg"
                    show={lgShowDoctor}
                    onHide={() => setLgShowDoctor(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Create Doctor
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group
                        className="position-relative mb-3"
                        controlId="citySelection"
                      >
                        <Form.Label>Name</Form.Label>
                        <div className="d-flex">
                          <Form.Control
                            required
                            defaultValue=""
                            placeholder="Doctor Name"
                            className="position-relative"
                          />
                        </div>
                      </Form.Group>
                      <Button variant="primary">Save</Button>{" "}
                    </Modal.Body>
                  </Modal>
                </div>
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
