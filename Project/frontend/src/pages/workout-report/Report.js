import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import WorkoutContext from "../../contexts/WorkoutContext";

const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#E4E4E4",
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
		textTransform: "uppercase",
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

const Report = () => {
	const { popularWorkouts, isLoading } = useContext(WorkoutContext);

	const WorkoutReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.title}>
					<Text>Most Popular Workouts</Text>
				</View>

				{popularWorkouts.map((workout) => (
					<View key={workout._id} style={styles.section}>
						<Text style={styles.row}>
							<h2>{workout.workout_name}</h2>
							<h2> --------------------- </h2>
							<h2>{workout.viewCount}</h2>
						</Text>
					</View>
				))}
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<WorkoutReport />} fileName="Workout Report.pdf">
				<Button disabled={isLoading}>{isLoading ? "Loading document..." : "Download now!"}</Button>
			</PDFDownloadLink>

			<h1>Report Preview</h1>
			<PDFViewer
				showToolbar={false}
				style={{
					width: "100%",
					height: "500px",
				}}
			>
				<WorkoutReport />
			</PDFViewer>
		</div>
	);
};

export default Report;
