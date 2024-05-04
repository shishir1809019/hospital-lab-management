import { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({ lgShow, setLgShow }: any) {
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Create Patient
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="col-4">
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-person"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Client Name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col className="col-4">
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-envelope"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Email Address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col className="col-4">
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-telephone"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Phone"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-4">
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-geo-alt"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col className="col-4">
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-gender-male"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Select Gender"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col className="col-4">
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-calendar"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Date OF Birth"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
          <Button variant="primary">Save</Button>{" "}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
