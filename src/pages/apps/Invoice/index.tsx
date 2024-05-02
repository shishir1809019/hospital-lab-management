import { Col, Dropdown, Card, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import PageTitle from "../../../components/PageTitle";
import { records } from "./data";
import Table from "../../../components/Table";

const columns = [
  {
    Header: "Barcode",
    accessor: "barcode",
    sort: true,
  },
  {
    Header: "Client Code",
    accessor: "clientCode",
    sort: true,
  },
  {
    Header: "Client Name",
    accessor: "clientName",
    sort: true,
  },
  {
    Header: "Doctor Name",
    accessor: "doctorName",
    sort: true,
  },
  {
    Header: "Subtotal",
    accessor: "subtotal",
    sort: true,
  },
  {
    Header: "Reference",
    accessor: "reference",
    sort: false,
  },
  {
    Header: "Discount",
    accessor: "discount",
    sort: false,
  },
  {
    Header: "Total",
    accessor: "total",
    sort: true,
  },
  {
    Header: "Paid",
    accessor: "paid",
    sort: false,
  },
  {
    Header: "Due",
    accessor: "due",
    sort: false,
  },
  {
    Header: "Date",
    accessor: "date",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: false,
  },
  {
    Header: "Action",
    accessor: "action",
    disableSortBy: true,
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
              <i className="bi bi-upc-scan"></i> Print Barcode
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <i className="bi bi-receipt"></i> Show Receipt
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <i className="bi bi-whatsapp"></i> Send Receipt WhatsApp
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <i className="bi bi-envelope-fill"></i> Send Receipt Mail
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <i className="bi bi-input-cursor-text"></i> Enter Result
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
const Invoice = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tasks", path: "/apps/invoice" },
          { label: "Tasks List", path: "/apps/invoice", active: true },
        ]}
        title={"Invoices"}
      />

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
    </>
  );
};

export default Invoice;
