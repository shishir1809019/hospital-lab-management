import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form, FloatingLabel } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { useParams } from "react-router-dom";
import { records } from "./data";

const NormalFormValidation = ({ formData }: any) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    shortcut: "T404",
    sampleType: "",
    price: "",
    precautions: "No comments",
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
                    defaultValue={formState.name}
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
                    defaultValue={formState.shortcut}
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
                    defaultValue={formState.sampleType}
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
                    defaultValue={formState.price}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingTextarea2"
                  label="Comments"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    defaultValue={formState.precautions}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Button type="submit">{formData ? "Update" : "Submit"}</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const AddCulture = () => {
  const { id } = useParams();
  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const recordToEdit = records.find(
        (record) => record.id === Number(id + 1)
      );
      setEditData(recordToEdit);
    }
  }, [id]);
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
          <NormalFormValidation formData={editData} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddCulture;
