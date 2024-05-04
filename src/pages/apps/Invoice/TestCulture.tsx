import { Row, Col, Card, Form } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";
import { testCultureRecords } from "./data";

const TestCulture = () => {
  const columns = [
    {
      Header: "Test Name",
      accessor: "testName",
      Cell: ({ row }: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Form.Check
            type="checkbox"
            id={`checkbox-${row.id}`}
            className="me-2"
            style={{ marginBottom: 3 }}
          />
          <label htmlFor={`checkbox-${row.id}`} className="mb-0">
            {row.values.testName}
          </label>{" "}
        </div>
      ),
    },
    {
      Header: "Price",
      accessor: "price",
      Cell: ({ value }: any) => `${value} USD`,
    },
  ];

  const sizePerPageList = [
    { text: "10", value: 10 },
    { text: "25", value: 25 },
    { text: "All", value: testCultureRecords.length },
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <PageTitle breadCrumbItems={[]} title={"Tests"} />
              <Card>
                <Card.Body>
                  <Table
                    columns={columns}
                    data={testCultureRecords}
                    pageSize={10}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                    isSearchable={true}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <PageTitle breadCrumbItems={[]} title={"Tests"} />
              <Card>
                <Card.Body>
                  <Table
                    columns={columns}
                    data={testCultureRecords}
                    pageSize={10}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                    isSearchable={true}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default TestCulture;
