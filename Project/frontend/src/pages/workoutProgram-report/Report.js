import React, { useContext, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button, createStyles, Text as MantineText } from "@mantine/core";

import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";

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
	const { isLoading, getAllWorkoutProgramsWithTotalRevenue, allWorkoutProgramsWithTotalRevenue } =
		useContext(WorkoutProgramContext);

	useEffect(() => {
		getAllWorkoutProgramsWithTotalRevenue();
	}, []);

	// Calculate total revenue
	let finalTotalRevenue = 0;
	allWorkoutProgramsWithTotalRevenue.forEach((workoutProgram) => {
		finalTotalRevenue += workoutProgram.totalRevenue;
	});

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
			<div className={classes.root}>
				<div className={classes.stat}>
					<MantineText className={classes.count}>Rs.{finalTotalRevenue}.00</MantineText>
					<MantineText className={classes.title}>Total Revenue From Workout Programs</MantineText>
				</div>
			</div>
			<br />

			<PDFDownloadLink document={<WorkoutProgramReport />} fileName="Workout Program Monthly Revenue Report.pdf">
				<Button className={classes.downloadButton} disabled={isLoading}>
					{isLoading ? "Generating Report..." : "Download now!"}
				</Button>
			</PDFDownloadLink>

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
		</div>
	);
};

export default Report;
