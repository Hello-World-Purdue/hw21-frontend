import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import { EventsData } from "../pages/schedule";

interface EventProps {
  eventsData: EventsData[];
  headingColumns: string[];
}

export const Event: FC<EventProps> = (
  { eventsData }: EventProps,
  headingColumns
) => {
  // console.log("eventsData[0]:" + eventsData[0].name);

  /*const event = (eventsData as Array<EventsData>).map((row, index) => {
      let rowData: { key: string; val: string | number; }[] = [];
      
      // build rowData
      Object.entries(row).forEach((data, i) => {
        rowData.push({
        key: headingColumns[i],
        val: data[1]
        });
      });
      */
  // define displayDetails - Idk what this does in typescript/jsx
  const displayDetails = (data) => {
    alert(`${data}`);
  };

  var color = "black";
  var orientation = "left";

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
        <div className={styles.blur} key={index}>
          <div className={styles.container_1r}>
            <div className={styles.event_resource_content}>
              <div className={styles.event_name}> {data.name}</div>
            </div>
            <div className={styles.event_resource_content} >
              <div className={styles.event_text}>
                <p>{data.times}</p>
                <p>{data.locations}</p>
              </div>
            </div>
            <button
              // key={index}
              onClick={() => {
                displayDetails(data.details);
              }}
              className={styles.event_button_1r}
            >
              DETAILS
            </button>
          </div>
        </div>
      );
    } else {
      //color == black
      pastEventsDivs[index] = (
        <div className={styles.blur} key={index + 100}>
          <div className={styles.container_1b}>
            <div className={styles.event_resource_content}>
              <div className={styles.event_name}> {data.name}</div>
            </div>
            <div className={styles.event_resource_content} >
              <div className={styles.event_text}>
                <p>{data.times}</p>
                <p>{data.locations}</p>
              </div>
            </div>
            <button
              // key={index}
              onClick={() => {
                displayDetails(data.details);
              }}
              className={styles.event_button_1b}
            >
              DETAILS
            </button>
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
          <div className={styles.event_resource_content} >
            <div className={styles.event_text}>
              <p>{data.times}</p>
              <p>{data.locations}</p>
            </div>
          </div>
          <button
            // key={index}
            onClick={() => {
              displayDetails(data.details);
            }}
            className={styles.event_button_1r}
          >
            DETAILS
          </button>
        </div>
      );
    } else {
      //color == black
      currEventsDivs[index] = (
        <div className={styles.container_1b} key={index + 100}>
          <div className={styles.event_resource_content}>
            <div className={styles.event_name}> {data.name}</div>
          </div>
          <div className={styles.event_resource_content} >
            <div className={styles.event_text}>
              <p>{data.times}</p>
              <p>{data.locations}</p>
            </div>
          </div>
          <button
            // key={index}
            onClick={() => {
              displayDetails(data.details);
            }}
            className={styles.event_button_1b}
          >
            DETAILS
          </button>
        </div>
      );
    }
  });

  return (
    <div>
      {/* upcoming */}
      <div>
        <p style={{ textAlign: "right", fontWeight: "bold", fontSize: "2.5vh" }}>
          UPCOMING<br></br>EVENTS
        </p>
      </div>
      <div
        style={{
          backgroundColor: "orange",
          maxWidth: "10%",
          marginLeft: "auto",
        }}
      >
        <p>&nbsp;</p>
      </div>

      <div className={styles.event_resource_grid}>
        {currEventsDivs.map((r, index) => (
          <div key={index}>{r}</div>
        ))}
      </div>

      {/* past */}
      <div>
        <p style={{ textAlign: "left", fontWeight: "bold", fontSize: "2.5vh" }}>
          PAST<br></br>EVENTS
        </p>
      </div>
      <div style={{ backgroundColor: "skyblue", maxWidth: "10%" }}>
        <p>&nbsp;</p>
      </div>

      <div className={styles.event_resource_grid}>
        {pastEventsDivs.map((r, index) => (
          <div key={index}>{r}</div>
        ))}
      </div>
    </div>
  );
};
