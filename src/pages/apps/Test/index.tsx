import { Row, Col, Card, Dropdown, ButtonGroup } from "react-bootstrap";

import PageTitle from "../../../components/PageTitle";

import { records } from "./data";

import Table from "../../../components/Table";
import { Link } from "react-router-dom";

const columns = [
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Shortcut",
    accessor: "shortcut",
    sort: true,
  },
  {
    Header: "Sample Type",
    accessor: "sampleType",
    sort: true,
  },
  {
    Header: "Price",
    accessor: "price",
    sort: true,
  },
  {
    Header: "Action",
    accessor: "action",
    sort: false,
    Cell: ({ row }: any) => (
      <div>
        <Dropdown as={ButtonGroup} className="mt-2 me-1" align="end">
          <Dropdown.Toggle variant="primary" className="cursor-pointer">
            <i className="bi bi-gear"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="span">
              <Link
                to={`/apps/test/edit/${row.values.shortcut}`}
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
    ),
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: records.length,
  },
];

const TestApp = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[{ label: "Apps", path: "/apps/test" }]}
        title={"Lab tests"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Col className="text-sm-end mt-sm-0 mt-2">
                <Link to="add" className="btn btn-primary btn-md float-end">
                  <i className="uil-plus me-1"></i>Add New
                </Link>
              </Col>

              <Table
                columns={columns}
                data={records}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TestApp;
