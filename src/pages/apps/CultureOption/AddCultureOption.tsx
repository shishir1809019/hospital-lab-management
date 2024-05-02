import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { useParams } from "react-router-dom";
import records from "./data";

const NormalFormValidation = ({ formData }: any) => {
  const [inputs, setInputs] = useState([{ id: Math.random(), value: "" }]);
  const [validated, setValidated] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    option: "",
  });
  useEffect(() => {
    if (formData) {
      setFormState(formData);
    }
    setInputs([{ id: Math.random(), value: formData?.option }]);
  }, [formData]);

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
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>Name</Form.Label>
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
            </Row>
            <Row>
              <Card>
                {" "}
                <Card.Body>
                  <Row>
                    <Col xs={11}>
                      <div className="page-title-box">
                        <h4 className="page-title">Add Options</h4>
                        <div className="page-title-right">
                          <div className="mt-2 mt-md-0">
                            <Button variant="primary" onClick={handleAddInput}>
                              <i className="uil-plus"></i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {inputs.map((input, index) => (
                      <Row key={index} className="align-items-center mb-3">
                        <Col md={11}>
                          <Form.Group controlId={`validationInput${index}`}>
                            {/* <Form.Label>Name</Form.Label> */}
                            <Form.Control
                              required
                              type="text"
                              placeholder={`Enter Option ${index + 1}`}
                              defaultValue={input.value}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Button
                            variant="danger"
                            onClick={() => handleRemoveInput(input.id)}
                          >
                            <i className="bi bi-trash fs-15"></i>
                          </Button>
                        </Col>
                      </Row>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Row>

            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const AddCultureOption = () => {
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

export default AddCultureOption;
