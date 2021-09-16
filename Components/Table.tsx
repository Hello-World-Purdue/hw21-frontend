import React, { FC } from "react";
import { HackerData } from "../pages/admin_dashboard";

interface TableProps {
	title: string;
	tableData: HackerData[];
	headingColumns: string[];
	breakOn?: string;
}

const Table: FC<TableProps> = ({
	title,
	tableData,
	headingColumns,
	breakOn = "medium",
}) => {
	const data = (tableData as Array<HackerData>).map((row, index) => {
		let rowData: { key: string; val: string | number }[] = [];

		Object.entries(row).forEach((data, i) => {
			rowData.push({
				key: headingColumns[i],
				val: data[1],
			});
		});

		return (
			<tr key={index}>
				{rowData.map((data, index) => (
					<td
						key={index}
						data-heading={data.key}
						style={{
							border: "solid 1px grey",
							paddingLeft: 5,
							paddingRight: 5,
							width: "100%",
							textAlign: "center",
						}}
					>
						{data.val}
					</td>
				))}
			</tr>
		);
	});

	var tableClasses; // = tableClass;
	tableClasses += " table";

	return (
		<div
			style={{
				overflow: "auto",
				height: 500,
				width: "100%",
				border: "solid 3px black",
			}}
		>
			<table
				className={tableClasses}
				style={{
					background: "white",
					fontSize: "1vw",
				}}
			>
				<thead style={{ color: "black", backgroundColor: "#58D3F7" }}>
					<tr>
						{headingColumns.map((col, index) => (
							<th key={index} style={{ padding: 10, fontWeight: 500 }}>
								{col}
							</th>
						))}
					</tr>
				</thead>
				<tbody style={{ color: "black" }}>{data}</tbody>
			</table>
		</div>
	);
};

export default Table;

// style={{
//   backgroundImage:`url("../../styles/images/admin_dashboard_background.jpg")`,
// }}
