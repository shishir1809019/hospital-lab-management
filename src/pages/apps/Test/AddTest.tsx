import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button, Form, FloatingLabel } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PageTitle from "../../../components/PageTitle";
import TaskDetails from "../Invoice/Board/TaskDetails";
import AddNewTask from "../Invoice/Board/AddNewTask";
import { TaskTypes, tasks } from "../Invoice/Board/data";

interface StateType {
  todoTasks: TaskTypes[];
  inprogressTasks: TaskTypes[];
  reviewTasks: TaskTypes[];
  doneTasks: TaskTypes[];
}

const NormalFormValidation = () => {
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
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="align-items-center">
              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>Shortcut</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Shortcut"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>Sample Type</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Sample Type"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6} md={4} lg={3} className="mb-3">
                {" "}
                <Form.Group
                  className="position-relative mb-3"
                  controlId="validationTooltip01"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="First name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingTextarea2"
                  label="Comments"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const AddTest = () => {
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [newTaskDetails, setNewTaskDetails] = useState<any>(null);
  const [state, setState] = useState<StateType>({
    todoTasks: tasks.filter((t) => t.status === "Pending"),
    inprogressTasks: tasks.filter((t) => t.status === "Inprogress"),
    reviewTasks: tasks.filter((t) => t.status === "Review"),
    doneTasks: tasks.filter((t) => t.status === "Done"),
  });
  const [totalTasks, setTotalTasks] = useState<number>(tasks.length);
  const getList = (id: string) => {
    const modifiedState: any = { ...state };
    const stateTasks: any = modifiedState[id] && modifiedState[id];
    return stateTasks;
  };
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required(),
      priority: yup.string().required(),
    })
  );

  const handleDateChange = (date: Date) => {
    if (newTaskDetails) {
      setNewTaskDetails({ ...newTaskDetails, dueDate: date });
    }
  };

  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = methods;

  const toggleNewTaskModal = () => {
    setNewTaskModal((prevstate) => !prevstate);
  };
  const handleNewTask = (values: any) => {
    const formData = {
      title: values["title"],
      priority: values["priority"],
    };

    const newTask = {
      ...newTaskDetails,
      ...formData,
      id: totalTasks + 1,
      dueDate: newTaskDetails.dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      totalComments: 18,
      totalSubTasks: 12,
      subTaskCompleted: 2,
    };

    let modifiedState: any = { ...state };
    let tasks = [...getList(newTaskDetails.queue), newTask];
    modifiedState[newTaskDetails.queue] = [...tasks];

    setState(modifiedState);
    setNewTaskModal(false);
    setTotalTasks(totalTasks + 1);
    reset();
  };

  const newTask = (status: string, queue: string) => {
    setNewTaskDetails({
      dueDate: new Date(),
      // userAvatar: [defaultAvatar],
      status: status,
      queue: queue,
    });
    setNewTaskModal(true);
  };
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Test", path: "/apps/test" },
          { label: "Create", path: "/apps/test/add", active: true },
        ]}
        title={"CREATE"}
      />

      <Row>
        <Col lg={12}>
          <NormalFormValidation />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskDetails newTask={newTask} />
        </Col>
      </Row>
      {newTaskModal && (
        <AddNewTask
          newTaskModal={newTaskModal}
          toggleNewTaskModal={toggleNewTaskModal}
          handleNewTask={handleNewTask}
          handleSubmit={handleSubmit}
          newTaskDetails={newTaskDetails}
          handleDateChange={handleDateChange}
          register={register}
          errors={errors}
          control={control}
        />
      )}
    </React.Fragment>
  );
};

export default AddTest;
