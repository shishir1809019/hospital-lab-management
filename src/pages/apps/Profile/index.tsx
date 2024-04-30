import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "@fullcalendar/react";
import { EventClickArg, EventInput } from "@fullcalendar/core";
import * as yup from "yup";

// components
import PageTitle from "../../../components/PageTitle";

// dummy data
import { defaultEvents } from "./data";

// images
import calendarImg from "../../../assets/images/cal.png";
import { FormInput, VerticalForm } from "../../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import FileUpload from "../../forms/FileUpload";

interface IntroCardProps {
  createNewEvent: () => void;
}
interface UserData {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  checkbox: boolean;
}

const IntroCard = ({ createNewEvent }: IntroCardProps) => {
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required("Please enter Username"),
      email: yup.string().required("Please enter Email address"),
      password: yup.string().required("Please enter Password"),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match")
        .required("This value is required."),
      checkbox: yup.bool().oneOf([true]),
    })
  );
  return (
    <Card>
      <Card.Body>
        <VerticalForm<UserData>
          onSubmit={() => {}}
          resolver={schemaResolver}
          defaultValues={{
            username: "Nik Patel",
            email: "admin@marcuricit.com",
          }}
        >
          <FormInput
            label={"Username"}
            type="text"
            name="username"
            placeholder="Enter your name"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Email address"}
            type="email"
            name="email"
            placeholder="Enter email"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Password"}
            type="password"
            name="password"
            placeholder="Password"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Confirm Password"}
            type="password"
            name="confirmpassword"
            placeholder="Password"
            containerClass={"mb-3"}
          />
          {/* <FormInput
            label={"Remember me"}
            type="checkbox"
            name="checkbox"
            containerClass={"mb-3"}
          /> */}
          <FileUpload />

          <div className="text-md-end mb-0">
            <Button variant="primary" className="me-1" type="submit">
              Submit
            </Button>
            <Button variant="secondary" type="reset">
              Cancel
            </Button>
          </div>
        </VerticalForm>
      </Card.Body>
    </Card>
  );
};

const Profile = () => {
  /*
   * modal handeling
   */
  const [show, setShow] = useState<boolean>(false);

  const onOpenModal = () => setShow(true);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  /*
   * event data
   */
  const [eventData, setEventData] = useState<EventInput>({});
  const [dateInfo, setDateInfo] = useState<any>({});

  /*
    on add event 
    */

  // create new event
  const createNewEvent = () => {
    setIsEditable(false);
    onOpenModal();
  };

  return (
    <>
      <PageTitle breadCrumbItems={[]} title={"Profile"} />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <IntroCard createNewEvent={createNewEvent} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
