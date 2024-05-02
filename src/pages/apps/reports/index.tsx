import React from "react";

// components
import { Row, Col, Dropdown, Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";
import records from "./data";

const columns = [
  {
    Header: "Barcode",
    accessor: "barcode",
  },
  {
    Header: "Client Code",
    accessor: "clientCode",
  },
  {
    Header: "Client Name",
    accessor: "clientName",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Tests",
    accessor: "tests",
    Cell: ({ value }: any) => (
      <ul style={{ listStyleType: "disc", paddingLeft: 20, margin: 0 }}>
        {value.map((test: any, index: any) => (
          <li key={index}>{test}</li>
        ))}
      </ul>
    ),
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Done",
    accessor: "done",
  },
  {
    Header: "Signed",
    accessor: "signed",
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }: any) => (
      <div>
        <Dropdown as={ButtonGroup} className="mt-2 me-1" align="end">
          <Dropdown.Toggle variant="primary" className="cursor-pointer">
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
    ),
  },
];

const sizePerPageList = [
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

const Reports = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          //   { label: "Branches", path: "/apps/calendar" },
          { label: "Reports", path: "/apps/reports", active: true },
        ]}
        title={"Reports"}
      />

      <Card>
        <Card.Body>
          {/* <Col className="text-sm-end mt-sm-0 mt-2">
            <Link to="add" className="btn btn-primary btn-md float-end">
              <i className="uil-plus me-1"></i>Add New
            </Link>
          </Col> */}

          <Table
            columns={columns}
            data={records}
            pageSize={10}
            sizePerPageList={sizePerPageList}
            isSortable={true}
            pagination={true}
            isSearchable={true}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Reports;
