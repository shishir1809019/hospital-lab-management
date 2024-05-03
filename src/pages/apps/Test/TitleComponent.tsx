import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  FloatingLabel,
  Card,
  Table,
} from "react-bootstrap";

const TitleComponent = () => {
  const [inputs, setInputs] = useState<any>([]);
  const [selectedOption, setSelectedOption] = useState("text");
  const [isChecked, setIsChecked] = useState(false);

  // Handler to add a simple text input
  const handleAddTextTypeInput = () => {
    const newInput = {
      id: inputs.length,
      type: "simpleText",
      value: "",
    };
    setInputs([...inputs, newInput]);
  };

  const handleAddComplexInput = () => {
    const newInput = {
      id: inputs.length,
      type: "complex",
      name: "",
      unit: "",
      result: "",
      referenceRange: "",
      separated: false,
      status: "",
    };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = (id: any) => {
    setInputs(inputs.filter((input: any) => input.id !== id));
  };

  const handleInputChange = (id: any, event: any) => {
    const { name, value } = event.target;
    const newInputs = inputs.map((input: any) => {
      if (input.id === id) {
        return { ...input, [name]: value };
      }
      return input;
    });
    setInputs(newInputs);
  };
  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <Row className="mt-3">
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Row className="align-items-center mb-3">
              <Col sm="auto">
                <label className="fw-bold d-inline-flex me-2">
                  Test Components
                </label>
              </Col>
              <Col className="text-sm-end mt-sm-0 mt-2">
                <Button onClick={handleAddTextTypeInput} className="me-1">
                  <i className="uil-plus me-1"></i>Title
                </Button>
                <Button onClick={handleAddComplexInput}>
                  <i className="uil-plus me-1"></i>Components
                </Button>
              </Col>
            </Row>
            <div>
              {inputs.map((input: any, index: any) =>
                input.type === "complex" ? (
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Unit</th>
                        <th>Result</th>
                        <th>Reference Range</th>
                        <th>Separated</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={input.id}>
                        <td>
                          <Form.Control
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleInputChange(input.id, e)}
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="unit"
                            value={input.unit}
                            onChange={(e) => handleInputChange(input.id, e)}
                          />
                        </td>
                        <td>
                          <div className="mb-3">
                            <Form.Check
                              type="radio"
                              id={`text-${index}`}
                              label="Text"
                              name={`text-option-${index}`}
                              value="text"
                              checked={selectedOption === "text"}
                              onChange={handleRadioChange}
                            />
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="radio"
                              id={`select-${index}`}
                              label="Select"
                              name={`select-option-${index}`}
                              value="select"
                              checked={selectedOption === "select"}
                              onChange={handleRadioChange}
                            />
                          </div>
                        </td>
                        <td>
                          <FloatingLabel controlId="floatingTextarea2" label="">
                            <Form.Control
                              required
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: "100px" }}
                            />
                          </FloatingLabel>
                        </td>
                        <td>
                          <Form.Check
                            required
                            type="checkbox"
                            label=""
                            onChange={handleCheckboxChange}
                          />
                          {isChecked && (
                            <Card className="mt-3">
                              <h5>Price</h5>
                              {/* <hr /> */}
                              {/* <Card.Body > */}
                              <Form.Control type="number" />
                              {/* </Card.Body> */}
                            </Card>
                          )}
                        </td>
                        <td>
                          <Form.Check type="checkbox" required label="" />
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleRemoveInput(input.id)}
                          >
                            <i className="bi bi-trash fs-15"></i>
                          </Button>
                        </td>
                      </tr>{" "}
                    </tbody>
                  </Table>
                ) : (
                  <Row key={index} className="align-items-center mb-3">
                    <Col md={11}>
                      <Form.Group controlId={`simpleInput${index}`}>
                        <Form.Control
                          required
                          type="text"
                          placeholder={`Enter Title ${index + 1}`}
                          value={input.value}
                          onChange={(e) => handleInputChange(input.id, e)}
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
                )
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TitleComponent;
