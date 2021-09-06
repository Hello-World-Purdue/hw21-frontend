import React, { Fragment, useState } from "react";
import styles from "../styles/announcements.module.css";
import homeStyles from "../styles/Home.module.css";
import AnnouncementLabel from "../Components/AnnouncementLabel";

import { Layout } from "../Components/Layout";
import { Header } from "../Components/Header";

interface Announcement {
	type: "events" | "food" | "judging" | "logistics" | "sponsor" | "misc";
	message: string;
}

// const list: Announcement[] = [
//   {
//     type: "food",
//     message: "LUNCH - AVAILABLE IN ROOM 3084",
//   },
//   {
//     type: "sponsor",
//     message: "SPONSOR EVENT - ROOM 2124",
//   },
//   {
//     type: "events",
//     message: "SMASH TOURNAMENT - ROOM 1140",
//   },
//   {
//     type: "judging",
//     message: "JUDGING WILL BEGIN IN 1 HOUR",
//   },
// ];

function Announcements() {
	//   const [annList, setAnnList] = useState<Announcement[]>(list);

	return (
		<div className={styles.announcementContainer}>
			<Layout>
				<Header headerImgClass="announcements-header">
					{/* <div className={homeStyles.header_text}>
						<h1 className={homeStyles.header_heading}>ANNOUNCEMENTS</h1>
						<p className={homeStyles.header_description}>
							KEEP YOURSELF UPDATED WITH WHAT'S HAPPENING
						</p>
					</div> */}
				</Header>
				{/* <div className={styles.announcementList}>
          {annList.map((announcement) => {
            return (
              <div className={styles.announcement}>
                <AnnouncementLabel annType={announcement.type} />
                <div className={styles.annMessage}>{announcement.message}</div>
              </div>
            );
          })}
        </div> */}
				<div style={{ textAlign: "center", marginBottom: '10vh' }}>
					<h4 style={{ fontFamily: "backissues" }}>NO ANNOUNCEMENTS YET.</h4>
				</div>
			</Layout>
		</div>
	);
}

export default Announcements;
