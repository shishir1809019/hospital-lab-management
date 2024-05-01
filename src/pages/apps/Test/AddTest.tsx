import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button, Form, FloatingLabel } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PageTitle from "../../../components/PageTitle";
import TaskDetails from "../Invoice/Board/TaskDetails";
import AddNewTask from "../Invoice/Board/AddNewTask";
import { TaskTypes, tasks } from "../Invoice/Board/data";
import TestComponent from "./TestComponent";

interface StateType {
  todoTasks: TaskTypes[];
  inprogressTasks: TaskTypes[];
  reviewTasks: TaskTypes[];
  doneTasks: TaskTypes[];
}

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
              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>Shortcut</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Shortcut"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>Sample Type</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Sample Type"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="First name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group
                  className="position-relative "
                  controlId="validationTooltip01"
                >
                  <Form.Label>Precautions</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    placeholder="Precautions"
                    style={{ height: "100px" }}
                    defaultValue=""
                  />
                </Form.Group>
              </Col>
            </Row>
            <TestComponent />
            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const AddTest = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Test", path: "/apps/test" },
          { label: "Create", path: "/apps/test/add", active: true },
        ]}
        title={"CREATE"}
      />

      <Row>
        <Col lg={12}>
          <NormalFormValidation />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <TestComponent />
        </Col>
      </Row> */}
    </React.Fragment>
  );
};

export default AddTest;
