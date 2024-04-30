import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Table,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// Define the records and column structure
const records = [
  { id: 1, name: "1", option: "Positive" },
  { id: 2, name: "2", option: "Negative" },
  { id: 3, name: "3", option: "Indeterminate" },
  { id: 4, name: "4", option: "Susceptible" },
  { id: 5, name: "5", option: "Resistant" },
  { id: 6, name: "6", option: "Intermediate" },
  { id: 7, name: "7", option: "Normal" },
  { id: 8, name: "8", option: "Abnormal" },
  { id: 9, name: "9", option: "High" },
  { id: 10, name: "10", option: "Low" },
  { id: 11, name: "11", option: "Elevated" },
  { id: 12, name: "12", option: "Not Elevated" },
];

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Option", accessor: "option" },
  { Header: "Action", accessor: "action" },
];

const CultureOption = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="page-title">Lab Culture</h4>
            <div className="page-title-right">
              <Link to="add" className="btn btn-primary mb-2 mb-sm-0">
                <i className="uil-plus me-1"></i> Create Culture Option
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3 mt-2">
        <Card>
          <Card.Body>
            <div className="table-responsive">
              <Table className="table mb-0">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th key={column.accessor}>{column.Header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, index) => (
                    <tr key={index}>
                      <td>{record.name}</td>
                      <td>{record.option}</td>
                      <td>
                        <div>
                          <Dropdown
                            as={ButtonGroup}
                            className="mt-2 me-1"
                            align="end"
                          >
                            <Dropdown.Toggle
                              variant="primary"
                              className="cursor-pointer"
                            >
                              <i className="bi bi-gear"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">
                                <i className="bi bi-pencil-square"></i> Edit
                              </Dropdown.Item>

                              <Dropdown.Item href="#">
                                <i className="bi bi-trash-fill"></i> Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default CultureOption;
