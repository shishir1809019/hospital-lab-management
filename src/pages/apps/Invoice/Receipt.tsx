import React, { useState } from "react";
import FeatherIcons from "feather-icons-react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import {
  branches,
  clientCodes,
  clientNames,
  doctorNames,
  testCultureRecords,
} from "./data";
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

const columns = [
  {
    Header: "Test Name",
    accessor: "testName", // accessor is the "key" in the data
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: ({ value }: any) => `${value} USD`, // Formatting the price to include USD
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
    value: testCultureRecords.length,
  },
];

const Receipt = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <PageTitle
            breadCrumbItems={[
              //   { label: "Test", path: "/apps/test" },
              { label: "Receipt", path: "/apps/invoice/add", active: true },
            ]}
            title={"Receipt"}
          />
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={8} className="mx-auto">
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="simpleinput">
                      Subtotal
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        type="text"
                        id="simpleinput"
                        disabled
                        defaultValue="0"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2}>
                      Contract
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Select>
                        <option>017589</option>
                        <option>017588</option>
                        <option>017586</option>
                        <option>017583</option>
                        <option>017584</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="simpleinput">
                      Discount
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        type="text"
                        id="simpleinput"
                        disabled
                        defaultValue="0"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="simpleinput">
                      Total
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        type="text"
                        id="simpleinput"
                        disabled
                        defaultValue="0"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="simpleinput">
                      Total
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        type="number"
                        id="simpleinput"
                        // disabled
                        defaultValue="25684"
                      />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>{" "}
        </Card.Body>
      </Card>
    </>
  );
};
export default Receipt;
