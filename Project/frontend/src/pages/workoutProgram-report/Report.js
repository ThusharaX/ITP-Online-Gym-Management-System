import React, { useContext, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button, createStyles, Text as MantineText, LoadingOverlay, Table } from "@mantine/core";

import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";

import BarChart from "./BarChart";

const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#E4E4E4",
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
		// textTransform: "uppercase",
	},
	section: {
		margin: 10,
		padding: 10,
	},
	row: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 5,
	},
});

const useStyles = createStyles((theme) => ({
	root: {
		display: "flex",
		backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
			theme.colors[theme.primaryColor][7]
		} 100%)`,
		padding: theme.spacing.xl * 1.5,
		borderRadius: theme.radius.md,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
		},
		marginLeft: theme.spacing.xl * 5,
		marginRight: theme.spacing.xl * 5,
	},

	title: {
		color: theme.white,
		textTransform: "uppercase",
		fontWeight: 700,
		fontSize: theme.fontSizes.sm,
	},

	count: {
		color: theme.white,
		fontSize: 32,
		lineHeight: 1,
		fontWeight: 700,
		marginBottom: theme.spacing.md,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	description: {
		color: theme.colors[theme.primaryColor][0],
		fontSize: theme.fontSizes.sm,
		marginTop: 5,
	},

	stat: {
		flex: 1,

		"& + &": {
			paddingLeft: theme.spacing.xl,
			marginLeft: theme.spacing.xl,
			borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

			[theme.fn.smallerThan("sm")]: {
				paddingLeft: 0,
				marginLeft: 0,
				borderLeft: 0,
				paddingTop: theme.spacing.xl,
				marginTop: theme.spacing.xl,
				borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
			},
		},
	},

	downloadButton: {
		marginLeft: theme.spacing.xl,
	},
}));

const Report = () => {
	const {
		isLoading,
		getAllWorkoutProgramsWithTotalRevenue,
		allWorkoutProgramsWithTotalRevenue,
		finalTotalRevenue,
		totalRevenueData,
		totalRevenueLabelsData,
	} = useContext(WorkoutProgramContext);

	const rows = allWorkoutProgramsWithTotalRevenue.map((workoutProgram) => (
		<tr key={workoutProgram._id}>
			<td>{workoutProgram.name}</td>
			<td>{workoutProgram.totalRevenue}</td>
		</tr>
	));

	useEffect(() => {
		getAllWorkoutProgramsWithTotalRevenue();
	}, []);

	const data = {
		labels: totalRevenueLabelsData,
		datasets: [
			{
				label: "Total Revenue by Workout Program",
				backgroundColor: "rgba(255,99,132,0.2)",
				// backgroundColor: [
				// 	"rgba(255, 99, 132, 0.2)",
				// 	"rgba(255, 159, 64, 0.2)",
				// 	"rgba(255, 205, 86, 0.2)",
				// 	"rgba(75, 192, 192, 0.2)",
				// 	"rgba(54, 162, 235, 0.2)",
				// 	"rgba(153, 102, 255, 0.2)",
				// 	"rgba(201, 203, 207, 0.2)",
				// ],
				borderColor: "rgba(255,99,132,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				data: totalRevenueData,
			},
		],
	};

	const { classes } = useStyles();

	const WorkoutProgramReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.title}>
					<Text>Workout Programs Monthly Revenue Report</Text>

					{allWorkoutProgramsWithTotalRevenue.map((workoutProgram) => (
						<View key={workoutProgram._id} style={styles.section}>
							<View style={styles.row}>
								<Text>{workoutProgram.name}</Text>
								<Text>Rs.{workoutProgram.totalRevenue}.00</Text>
							</View>
						</View>
					))}

					<View style={styles.section}>
						<View style={styles.row}>
							<Text style={{ fontSize: "30" }}>Total Revenue: Rs.{finalTotalRevenue}.00/=</Text>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	);

	return (
		<div>
			<div>
				<LoadingOverlay visible={isLoading} />

				<h2 style={{ marginLeft: "20px" }}>Total Revenue by Workout Program</h2>
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
						margin: "20px",
					}}
				>
					<BarChart data={data} />
					<Table
						horizontalSpacing="xl"
						verticalSpacing="xs"
						fontSize="sm"
						// striped
						// highlightOnHover
						style={{ marginTop: 10, marginBottom: 10, width: "40%", height: "50%" }}
						sx={(theme) => ({
							// backgroundColor: theme.colors.gray[0],
							backgroundColor: `${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white}`,
							// "&:hover": {
							// 	backgroundColor: theme.colors.gray[1],
							// },
							borderLeft: `3px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white}`,
						})}
					>
						<thead>
							<tr>
								<th>Workout Program</th>
								<th>Total Revenue (Rs.)</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</Table>
				</div>

				<div className={classes.root}>
					<div className={classes.stat}>
						<MantineText className={classes.count}>Rs.{finalTotalRevenue}.00</MantineText>
						<MantineText className={classes.title}>Total Revenue From Workout Programs</MantineText>
					</div>
				</div>
				<br />

				<h1
					style={{
						marginLeft: "20px",
						marginRight: "20px",
					}}
				>
					Report Preview
				</h1>
				<PDFViewer
					showToolbar={false}
					style={{
						width: "95%",
						height: "500px",
						marginLeft: "20px",
						marginRight: "20px",
					}}
				>
					<WorkoutProgramReport />
				</PDFViewer>

				<PDFDownloadLink document={<WorkoutProgramReport />} fileName="Workout Program Monthly Revenue Report.pdf">
					<Button className={classes.downloadButton} disabled={isLoading}>
						{isLoading ? "Generating Report..." : "Download now!"}
					</Button>
				</PDFDownloadLink>
			</div>
		</div>
	);
};

export default Report;
