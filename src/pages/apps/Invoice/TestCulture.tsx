import { Row, Col, Card } from "react-bootstrap";
import { testCultureRecords } from "./data";
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

const TestCulture = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col className="">
              {" "}
              <>
                <PageTitle
                  breadCrumbItems={
                    [
                      //   { label: "Branches", path: "/apps/calendar" },
                      //   { label: "Tests", path: "/apps/calendar", active: true },
                    ]
                  }
                  title={"Tests"}
                />

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
              </>
            </Col>
            <Col className="">
              <>
                <PageTitle
                  breadCrumbItems={
                    [
                      //   { label: "Branches", path: "/apps/calendar" },
                      //   { label: "Tests", path: "/apps/calendar", active: true },
                    ]
                  }
                  title={"Culture"}
                />

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
              </>
            </Col>
          </Row>
        </Card.Body>
      </Card>{" "}
    </>
  );
};
export default TestCulture;
