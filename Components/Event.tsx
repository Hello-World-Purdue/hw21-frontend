import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import { EventsData } from "../pages/schedule";

interface EventProps {
  eventsData: EventsData[];
  headingColumns: string[];
}

export const Event: FC<EventProps> = ({ eventsData }: EventProps) => {
  const displayDetails = (data) => {
    alert(`${data}`);
  };

  var color = "black";
  var pastEvents = [];
  var currEvents = [];
  var pastEventsDivs = [];
  var currEventsDivs = [];

  eventsData.map((data, index) => {
    if (data.happened == true) {
      pastEvents.push(data);
    }
    if (data.happened == false) {
      currEvents.push(data);
    }
  });

  pastEvents.map((data, index) => {
    if (index % 3 == 0) {
      if (color == "black") {
        color = "red";
      } else {
        color = "black";
      }
    }

    if (color == "red") {
      pastEventsDivs[index] = (
        <div key={index}>
          <div className={styles.container_1r}>
            <div className={styles.event_resource_content}>
              <div className={styles.event_name}> {data.name}</div>
            </div>
            <div
              style={{ fontFamily: "BackIssuesBB" }}
              className={styles.event_resource_content}
            >
              <div className={styles.event_text}>
                <p>{data.times}</p>
                <p>{data.locations}</p>
              </div>
            </div>
            {/* <button
              // key={index}
              onClick={() => {
                displayDetails(data.details);
              }}
              className={styles.event_button_1r}
            >
              DETAILS
            </button> */}
            {data.details}
          </div>
        </div>
      );
    } else {
      //color == black
      pastEventsDivs[index] = (
        <div key={index + 100}>
          <div className={styles.container_1b}>
            <div
              style={{ fontFamily: "BackIssuesBB" }}
              className={styles.event_resource_content}
            >
              <div className={styles.event_name}> {data.name}</div>
            </div>
            <div className={styles.event_resource_content}>
              <div className={styles.event_text}>
                <p>{data.times}</p>
                <p>{data.locations}</p>
                <p>{data.details}</p>
              </div>
            </div>
            {/* <button
              // key={index}
              onClick={() => {
                displayDetails(data.details);
              }}
              className={styles.event_button_1b}
            >
              DETAILS
            </button> */}
          </div>
        </div>
      );
    }
  });

  currEvents.map((data, index) => {
    if (index % 3 == 0) {
      if (color == "black") {
        color = "red";
      } else {
        color = "black";
      }
    }

    if (color == "red") {
      currEventsDivs[index] = (
        <div className={styles.container_1r} key={index}>
          <div className={styles.event_resource_content}>
            <div className={styles.event_name}> {data.name}</div>
          </div>
          <div className={styles.event_resource_content}>
            <div className={styles.event_text}>
              <p>{data.times}</p>
              <p>{data.locations}</p>
              <p>{data.details}</p>
            </div>
          </div>
        </div>
      );
    } else {
      //color == black
      currEventsDivs[index] = (
        <div className={styles.container_1b} key={index + 100}>
          <div
            style={{ fontFamily: "BackIssuesBB" }}
            className={styles.event_resource_content}
          >
            <div className={styles.event_name}> {data.name}</div>
          </div>
          <div className={styles.event_resource_content}>
            <div className={styles.event_text}>
              <p>{data.times}</p>
              <p>{data.locations}</p>
              <p>{data.details}</p>
              {}
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div style={{ fontFamily: "BackIssuesBB" }}>
      {/* upcoming */}
      <div>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "4vh",
            paddingRight: "10px",
          }}
        >
          UPCOMING EVENTS
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            width: "30%",
            height: "1.2rem",
          }}
        >
          <p>&nbsp;</p>
        </div>
      </div>

      <div className={styles.event_resource_grid}>
        {currEventsDivs.map((r, index) => (
          <div key={index}>{r}</div>
        ))}
      </div>

      {/* past */}
      <div>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "4vh",
            paddingLeft: "10px",
          }}
        >
          PAST EVENTS
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "skyblue",
            width: "22%",
            height: "1.2rem",
          }}
        >
          <p>&nbsp;</p>
        </div>
      </div>

      <div className={styles.event_resource_grid}>
        {pastEventsDivs.map((r, index) => (
          <div key={index}>{r}</div>
        ))}
      </div>
    </div>
  );
};
