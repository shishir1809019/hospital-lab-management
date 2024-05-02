import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Dropdown,
  ButtonGroup,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

import LeftBar from "./LeftBar";

// dafault data
import { emails as mails, chatUsers, records } from "./data";
import Table from "../../../components/Table";

const Email = ({ email }: { email: EmailItems }) => {
  return (
    <li className={classNames({ unread: !email.is_read })}>
      <div className="col-mail col-mail-1">
        <div className="checkbox-wrapper-mail">
          <input
            type="checkbox"
            className="form-check-input"
            id={"mail" + email.id}
          />
          <label className="toggle" htmlFor={"mail" + email.id}></label>
        </div>
        <span
          className={classNames("star-toggle", "uil", "uil uil-star", {
            "text-warning": email.is_important,
          })}
        ></span>
        <Link to="/apps/email/details" className="title">
          {email.from_name}
          {email.number_of_reply > 1 && <span> ({email.number_of_reply})</span>}
        </Link>
      </div>
      <div className="col-mail col-mail-2">
        <Link to="/apps/email/details" className="subject">
          {email.subject} &nbsp;&ndash;&nbsp;
          <span className="teaser">{email.teaser}</span>
        </Link>
        <div className="date">{email.time}</div>
      </div>
    </li>
  );
};

interface EmailItems {
  id: number;
  from_name: string;
  from_email: string;
  subject: string;
  teaser: string;
  number_of_reply: number;
  is_important: boolean;
  is_read: boolean;
  time: string;
  date: string;
}

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
  const [emails] = useState<Array<EmailItems>>(mails);
  const [totalEmails] = useState<number>(mails.length);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(20);
  const [totalUnreadEmails] = useState<number>(
    mails.filter((e: any) => e.is_read === false).length
  );

  const unreadEmails = emails.filter((email) => !email.is_read);
  const importantEmails = emails.filter((email) => email.is_important);
  const otherEmails = emails.filter(
    (email) => email.is_read && !email.is_important
  );

  const getStartIndex = useCallback(
    (index) => {
      let start = index - 1;
      if (start === 0) {
        return start;
      } else {
        return start - unreadEmails.length - importantEmails.length;
      }
    },
    [unreadEmails.length, importantEmails.length]
  );

  const getEndIndex = useCallback(
    (index) => {
      let end = index;
      return end - unreadEmails.length - importantEmails.length;
    },
    [importantEmails.length, unreadEmails.length]
  );

  const [emailList, setEmailList] = useState<EmailItems[]>(
    otherEmails.slice(getStartIndex(startIndex), getEndIndex(endIndex))
  );

  /**
   * Gets the next page
   */
  const getNextPage = () => {
    const startIdx = startIndex + 20;
    const endIdx = endIndex + 20;
    setStartIndex(startIdx);
    setEndIndex(endIdx);
    setEmailList(
      otherEmails.slice(getStartIndex(startIdx), getEndIndex(endIdx))
    );
  };

  /**
   * Gets the prev page
   */
  const getPrevPage = () => {
    const startIdx = startIndex - 20;
    const endIdx = endIndex - 20;
    setStartIndex(startIdx);
    setEndIndex(endIdx);
    setEmailList(
      otherEmails.slice(getStartIndex(startIdx), getEndIndex(endIdx))
    );
  };

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
