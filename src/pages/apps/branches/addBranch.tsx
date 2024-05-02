import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import records from "./data";

// components

const NormalFormValidation = ({ formData }: any) => {
  const [validated, setValidated] = useState<boolean>(false);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (formData) {
      setFormState(formData);
    }
  }, [formData]);

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
                    defaultValue={formState.name}
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
                    defaultValue={formState.phone}
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
                    defaultValue={formState.address}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">{formData ? "Update" : "Submit"}</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const AddBranch = () => {
  const { name } = useParams();

  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    if (name) {
      const recordToEdit = records.find((record) => record.name === name);
      setEditData(recordToEdit);
    }
  }, [name]);
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
          <NormalFormValidation formData={editData} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddBranch;
