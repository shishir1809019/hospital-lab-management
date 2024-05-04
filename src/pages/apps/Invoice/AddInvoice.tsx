import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import NormalFormValidation from "./NormalFormValidation";
import TestCulture from "./TestCulture";
import Receipt from "./Receipt";

const AddInvoice = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Test", path: "/apps/test" },
          { label: "Create", path: "/apps/test/add", active: true },
        ]}
        title={"Create Invoice"}
      />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col lg={12}>
            <NormalFormValidation />
            <TestCulture />
            <Receipt />
            <Button type="submit">Create Invoice</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddInvoice;
