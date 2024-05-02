import React from "react";

// components
import {
  Row,
  Col,
  Dropdown,
  Card,
  Button,
  ButtonGroup,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import records from "./data";
import PageTitle from "../../../../components/PageTitle";
import Table from "../../../../components/Table";

const columns = [
  {
    Header: "Test",
    accessor: "test",
    sort: true,
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: ({ value, row, column }: any) => (
      <InputGroup>
        <Form.Control
          defaultValue={value}
          type="number"
          style={{ width: "25px" }}
          onBlur={(e) => handlePriceChange(e, row.original)}
          aria-label="Dollar amount (with dot and two decimal places)"
        />
        <InputGroup.Text>USD</InputGroup.Text>
      </InputGroup>
    ),
  },
];

const handlePriceChange = (e: any, record: any) => {
  const newPrice = e.target.value;
  console.log(`New price for ${record.test}: ${newPrice}`);
};

const sizePerPageList = [
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: records.length,
  },
];

const TestPrice = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          // { label: "Branches", path: "/apps/calendar" },
          { label: "Test", path: "/apps/test", active: true },
        ]}
        title={"Tests Table"}
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
            pageSize={25}
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

export default TestPrice;
