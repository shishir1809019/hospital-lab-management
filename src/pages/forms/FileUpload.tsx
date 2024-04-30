import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import FileUploader from "../../components/FileUploader";

const FileUpload = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Forms", path: "/dashboard/edit-profile" },
          // { label: "File Upload", path: "/forms/upload", active: true },
        ]}
        title={"Upload Image"}
      />

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <FileUploader
                onFileUpload={(files) => {
                  console.log("Uploaded files - ", files);
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FileUpload;
