import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { FC, Fragment, useEffect, useState } from "react";
import { Layout } from "../Components/Layout";
import { Event } from "../Components/Event";
import { Header } from "../Components/Header";
import Image from "next/image";

export interface EventsData {
  name: string;
  times: string;
  locations: string;
  details: string;
  happened: boolean;
}

export default function Schedule() {
  let data: EventsData[] = [
    {
      name: "Debugging Techniques",
      times: "Sept 13, 7:00 to 8:00 PM",
      locations: "LWSN B155",
      details: "",
      happened: Date.now() > Date.parse("2021-09-13, 20:00:00") ? true : false,
    },
    {
      name: "Intro to React",
      times: "Sept 14, 7:30 to 8:30 PM",
      locations: "LWSN B155",
      details: "",
      happened: Date.now() > Date.parse("2021-09-14, 20:30:00") ? true : false,
    },
    {
      name: "WTF is a hackathon",
      times: "Sept 15, 6:00 to 7:00 PM",
      locations: "LWSN B155",
      details: "",
      happened: Date.now() > Date.parse("2021-09-15, 19:00:00") ? true : false,
    },
    {
      name: "So you want to get git?",
      times: "Sept 16, 6:00 to 7:00 PM",
      locations: "HAAS G066",
      details: "",
      happened: Date.now() > Date.parse("2021-09-16, 19:00:00") ? true : false,
    },
    {
      name: "Intro to Python",
      times: "Sept 17, 4:00 to 5:30 PM",
      locations: "LWSN B151",
      details: "",
      happened: Date.now() > Date.parse("2021-09-17, 17:30:00") ? true : false,
    },
    {
      name: "Check-in / Last minute team building",
      times: "Sept 18, 8:30 to 9:30 AM",
      locations: "WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 09:30:00") ? true : false,
    },
    {
      name: "Opening Ceremony",
      times: "Sept 18, 9:30 to 10:00 AM",
      locations: "WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 10:00:00") ? true : false,
    },
    {
      name: "Hacking Begins",
      times: "Sept 18, 10:00 AM",
      locations: "WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 10:00:00") ? true : false,
    },
    {
      name: "Lunch Break",
      times: "Sept 18, 12:00 to 1:00 PM",
      locations: "Outside WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 13:00:00") ? true : false,
    },
    {
      name: "Postman Workshop",
      times: "Sept 18, 1:30 to 2:30 PM",
      locations: "WALC 1132 / Virtual",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 14:30:00") ? true : false,
    },
    {
      name: "Scavenger Hunt",
      times: "Sept 18, 3:00 to 4:00 PM",
      locations: "Outside",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 16:00:00") ? true : false,
    },
    {
      name: "Snack Break",
      times: "Sept 18, 4:00 to 5:00 PM",
      locations: "Outside WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 16:00:00") ? true : false,
    },
    {
      name: "Cisco Workshop",
      times: "Sept 18, 5:00 to 6:00 PM",
      locations: "WALC 1132",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 18:00:00") ? true : false,
    },
    {
      name: "Dinner",
      times: "Sept 18, 7:00 to 8:00 PM",
      locations: "WALC 3121, 3127, 3132, 3138",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 20:00:00") ? true : false,
    },
    {
      name: "Board Games",
      times: "Sept 18, 11:00 to 12:00 PM",
      locations: "WALC 3121, 3127, 3132, 3138",
      details: "",
      happened: Date.now() > Date.parse("2021-09-18, 23:59:59") ? true : false,
    },
    {
      name: "Midnight Snack",
      times: "Sept 19, 12:00 to 12:30 AM",
      locations: "Outside WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-19, 00:30:00") ? true : false,
    },
    {
      name: "Board Games",
      times: "Sept 19, 12:00 to 1:00 AM",
      locations: "WALC 3121, 3127, 3132, 3138",
      details: "",
      happened: Date.now() > Date.parse("2021-09-19, 01:00:00") ? true : false,
    },
    {
      name: "Smash Tournament",
      times: "Sept 19, 3:00 to 4:00 AM",
      locations: "WALC 3121, 3127, 3132, 3138",
      details: "",
      happened: Date.now() > Date.parse("2021-09-19, 04:00:00") ? true : false,
    },
    {
      name: "Breakfast",
      times: "Sept 19, 8:00 to 9:00 AM",
      locations: "Outside WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-19, 09:00:00") ? true : false,
    },
    {
      name: "Hacking Ends",
      times: "Sept 19, 10:00 AM",
      locations: "WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-19, 10:00:00") ? true : false,
    },
    {
      name: "Expo",
      times: "Sept 19, 11:00 AM to 1:00 PM",
      locations: "WALC",
      details: "",
      happened: Date.now() > Date.parse("2021-09-19, 13:00:00") ? true : false,
    },
    {
      name: "Closing Ceremony / Demos",
      times: "Sept 19, 1:30 to 2:30 PM",
      locations: "Hiler Theatre",
      details: "",
      happened: Date.now() > Date.parse("2021-09-19, 16:30:00") ? true : false,
    },
  ];

  const [eventsData, setEventsData] = useState(data);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setEventsData(data);
      setCount(count + 1);
    }, 300000);
  }, [count]);

  return (
    <div className={styles.resources}>
      <Head>
        <title>Schedule</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header headerImgClass="schedule-header"></Header>
        <Fragment>
          <Event
            eventsData={eventsData}
            headingColumns={["name", "times", "locations", "details"]}
          />
        </Fragment>
      </Layout>
    </div>
  );
}
