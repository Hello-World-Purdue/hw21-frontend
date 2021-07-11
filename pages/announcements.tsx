import React, { useState, useEffect } from "react";
import styles from "../styles/ann.module.css";

import AnnLabel from "../components/AnnLabel";

interface Announcement {
	type: "events" | "food" | "judging" | "logistics" | "sponsor" | "misc";
	message: string;
}

const list: Announcement[] = [
	{
		type: "food",
		message: "LUNCH - AVAILABLE IN ROOM 3084",
	},
	{
		type: "sponsor",
		message: "SPONSOR EVENT - ROOM 2124",
	},
	{
		type: "events",
		message: "SMASH TOURNAMENT - ROOM 1140",
	},
	{
		type: "judging",
		message: "JUDGING WILL BEGIN IN 1 HOUR",
	},
];

function Announcements() {
	const [annList, setAnnList] = useState<Announcement[]>(list);

	return (
		<div className={styles.announcementList}>
			{annList.map((announcement) => {
				return (
					<div className={styles.announcement}>
							<AnnLabel annType={announcement.type} />
						<div className={styles.annMessage}>{announcement.message}</div>
					</div>
				);
			})}
		</div>
	);
}

export default Announcements;
