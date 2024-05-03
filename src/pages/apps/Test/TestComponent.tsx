import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Table,
  Form,
  FloatingLabel,
} from "react-bootstrap";

const TestComponent = () => {
  const [inputs, setInputs] = useState([{ id: Math.random(), value: "" }]);
  const [tableData, setTableData] = useState([
    {
      name: "",
      unit: "",
      result: "",
      referenceRange: "",
      separated: "",
      status: "",
    },
  ]);
  const [selectedOption, setSelectedOption] = useState("text");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const list = [...tableData];
    list[index] = {
      ...list[index],
      [name]: value,
    };
    setTableData(list);
  };
  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleAddRow = () => {
    setTableData([
      ...tableData,
      {
        name: "",
        unit: "",
        result: "",
        referenceRange: "",
        separated: "",
        status: "",
      },
    ]);
  };
  const handleAddInput = () => {
    setInputs(inputs.concat({ id: Math.random(), value: "" }));
  };
  const handleRemoveInput = (id: any) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleRemoveRow = (index: any) => {
    const list = [...tableData];
    list.splice(index, 1);
    setTableData(list);
  };

  const renderTableData = () => {
    return tableData.map((rowData, index) => {
      // const { name, unit, result, referenceRange, separated, status } = rowData;
      const { name, unit } = rowData;

      return (
        <tr key={index}>
          <td>
            <Form.Control
              required
              type="text"
              name="name"
              value={name}
              onChange={(event) => handleInputChange(index, event)}
            />
          </td>
          <td>
            <Form.Control
              required
              type="text"
              name="unit"
              value={unit}
              onChange={(event) => handleInputChange(index, event)}
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
          <td className="text-center">
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
            <Button variant="danger" onClick={() => handleRemoveRow(index)}>
              <i className="bi bi-trash fs-15"></i>
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Row className="mt-3">
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Row className="align-items-center mb-3">
              <Col sm={"auto"}>
                <label className="fw-bold d-inline-flex me-2 ">
                  Test Components
                </label>
              </Col>
              <Col className="text-sm-end mt-sm-0 mt-2">
                <Button onClick={handleAddInput} className="me-1">
                  <i className="uil-plus me-1"></i>Title
                </Button>
                <Button onClick={handleAddRow}>
                  <i className="uil-plus me-1"></i>Components
                </Button>
              </Col>
            </Row>
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
              <tbody>{renderTableData()}</tbody>
            </Table>
            <Row>
              {inputs.map((input, index) => (
                <Row key={index} className="align-items-center mb-3">
                  <Col md={11}>
                    <Form.Group controlId={`validationInput${index}`}>
                      {/* <Form.Label>Name</Form.Label> */}
                      <Form.Control
                        required
                        type="text"
                        placeholder={`Enter Title ${index + 1}`}
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
      </Col>
    </Row>
  );
};

export default TestComponent;
