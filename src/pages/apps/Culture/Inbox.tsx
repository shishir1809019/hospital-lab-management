import { Link } from "react-router-dom";
import { Row, Col, Card, Dropdown, ButtonGroup } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";

// dafault data
import { records } from "./data";
import Table from "../../../components/Table";

const columns = [
  {
    Header: "Name",
    accessor: "name",
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
    Cell: ({ row }: any) => (
      <div>
        <Dropdown as={ButtonGroup} className="mt-2 me-1" align="end">
          <Dropdown.Toggle variant="primary" className="cursor-pointer">
            <i className="bi bi-gear"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="span">
              <Link
                to={`/apps/culture/edit/${row.id}`}
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
// Inbox
const Culture = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Lab", path: "/apps/culture" },
          { label: "Lab Culture", path: "/apps/culture", active: true },
        ]}
        title={"Lab Culture"}
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

export default Culture;
