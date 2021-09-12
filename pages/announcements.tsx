import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "../styles/announcements.module.css";
import homeStyles from "../styles/Home.module.css";
import AnnouncementLabel from "../Components/AnnouncementLabel";

import { Layout } from "../Components/Layout";
import { Header } from "../Components/Header";
import { w3cwebsocket as WebSocket } from "websocket";
import { CreateAnnouncementsButton } from "../Components/Forms/AnnouncementForm";
import UserContext from "../context/UserContext";
import { userInfo } from "os";
import AuthContext from "../context/AuthContext";

interface Announcement {
  label:
    | "Events"
    | "Food"
    | "Judging"
    | "Logistics"
    | "Sponsor"
    | "Miscellaneous";
  body: string;
}

const list: Announcement[] = [];

function Announcements() {
  const { getAnnouncements } = useContext(UserContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [annList, setAnnList] = useState<Announcement[]>(list);

  const setupWS = () => {
    const url =
      process.env.NODE_ENV === "production"
        ? "wss://helloworldpurdue-api.herokuapp.com"
        : "ws://localhost:5000";
    const ws = new WebSocket(url, "echo-protocol");

    ws.onopen = function () {
      console.log("WebSocket Client Connected");
    };

    ws.onerror = function (error) {
      console.log("Connection Error: " + error.toString());
    };

    ws.onmessage = function (message) {
      // if (message === 'utf8') {
      console.log("Received: '" + message.data + "'");
      console.log("received: %s", message);
      const msg = JSON.parse(message.data + "");
      setAnnList([
        {
          label: msg.label,
          body: msg.body,
        },
        ...annList,
      ]);
      // }
    };

    ws.onclose = function () {
      console.log("echo-protocol Connection Closed");
    };
  };

  useEffect(() => {
    setupWS();
    console.log("use effect - announcement");
    getAnnouncements().then((d) => {
      console.log(d.announcements);
      setAnnList(d.announcements);
    });
  }, []);

  return (
    <div className={styles.announcementContainer}>
      <Layout>
        <Header headerImgClass="announcements-header"></Header>
        {isAuthenticated && (user.role === "ADMIN" || user.role === "EXEC") && (
          <CreateAnnouncementsButton />
        )}

        {annList && annList.length > 0 ? (
          <div className={styles.announcementList}>
            {annList.map((announcement) => {
              return (
                <div className={styles.announcement}>
                  <AnnouncementLabel annType={announcement.label} />
                  <div className={styles.annMessage}>{announcement.body}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: "center", marginBottom: "10vh" }}>
            <h4 style={{ fontFamily: "backissues" }}>NO ANNOUNCEMENTS YET.</h4>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default Announcements;
