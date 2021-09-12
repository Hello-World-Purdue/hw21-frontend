import React, { useContext, useState } from "react";
import Link from "next/link";
import { Form, Card } from "react-bootstrap";
import CustomButton from "../CustomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/forms.module.css";
import UserContext from "../../context/UserContext";

export const announcementLabel = [
  "Events",
  "Food",
  "Logistics",
  "Sponsor",
  "Judging",
  "Miscellaneous",
];

const AnnouncementsForm: React.FC<{}> = (props) => {
  const [body, setBody] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const { makeAnnouncement } = useContext(UserContext);

  function submitForm(event: React.FormEvent) {
    event.preventDefault();

    const ancmt = {
      body: body,
      title: "Announcement",
      label: label,
    };

    makeAnnouncement(ancmt);
  }

  const bodyHandler = (event) => {
    setBody(event.target.value);
  };

  const labelHandler = (event) => {
    setLabel(event.target.value);
  };

  return (
    <Card className={styles.formContainer}>
      <Form className={styles.form} onSubmit={submitForm}>
        <Form.Group className={styles.formField}>
          <Form.Label>BODY</Form.Label>
          <Form.Control
            onChange={bodyHandler}
            type="text"
            name="username"
            required
          />
        </Form.Group>

        <Form.Group className={styles.formField}>
          <Form.Label>LABEL</Form.Label>
          <br></br>
          <select
            className="form-control"
            onChange={labelHandler}
            name="label"
            required
          >
            {}
            {announcementLabel.map((label) => (
              <option value={label} key={label}>
                {label}
              </option>
            ))}
          </select>
        </Form.Group>

        <div className={styles.buttonContainer}>
          <CustomButton>BAM!</CustomButton>
        </div>
      </Form>
    </Card>
  );
};

export const CreateAnnouncementsButton = () => (
  <>
    <div className="" style={{ position: "relative" }}>
      <button
        type="button"
        className="create-ancmnt-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Announcement
      </button>
    </div>

    <div className="modal" id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Announcement</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <AnnouncementsForm />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AnnouncementsForm;
