import React from "react";
import { Card, Col, Dropdown, Row, Button } from "react-bootstrap";
import FeatherIcons from "feather-icons-react";

interface TaskDetailsProps {
  newTask: (status: string, queue: string) => void;
}

const TaskDetails = ({ newTask }: TaskDetailsProps) => {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Row className="align-items-center">
              <Col sm={"auto"}>
                <label className="fw-bold d-inline-flex me-2">
                  Test Components
                </label>
              </Col>
              <Col className="text-sm-end mt-sm-0 mt-2">
                <Button onClick={() => newTask("Pending", "todoTasks")}>
                  <i className="uil-plus me-1"></i>Create Components
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TaskDetails;
