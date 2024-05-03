import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { records } from "./data";
import { useParams } from "react-router-dom";
import TitleComponent from "./TitleComponent";

const NormalFormValidation = ({ formData }: any) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    shortcut: "",
    sampleType: "",
    price: "",
    precautions: "Precautions",
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
                    defaultValue={formState.precautions}
                  />
                </Form.Group>
              </Col>
            </Row>
            <TitleComponent />
            <Button type="submit">{formData ? "Update" : "Submit"}</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const AddTest = () => {
  const { shortcut } = useParams();
  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    if (shortcut) {
      const recordToEdit = records.find(
        (record) => record.shortcut === shortcut
      );
      setEditData(recordToEdit);
    }
  }, [shortcut]);
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
      {/* <Row>
        <Col>
          <TestComponent />
        </Col>
      </Row> */}
    </React.Fragment>
  );
};

export default AddTest;
