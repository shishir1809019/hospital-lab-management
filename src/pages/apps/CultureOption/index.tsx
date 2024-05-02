import React from "react";
import { Row, Col, Card, Table, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import records from "./data";

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
                              <Dropdown.Item as="span">
                                <Link
                                  to={`/apps/culture-option/edit/${record.name}`}
                                  className="dropdown-item"
                                >
                                  <i className="bi bi-pencil-square"></i> Edit
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item as="span">
                                <Link to="#" className="dropdown-item">
                                  <i className="bi bi-trash-fill"></i> Delete
                                </Link>
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
