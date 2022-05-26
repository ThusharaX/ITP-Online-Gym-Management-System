import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import EventContext from "../../contexts/EventContext";

const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#E4E4E4",
	},
	title: {
		fontSize: 23,
		textAlign: "center",
		margin: 10,
	},
	content: {
		margin: 10,
	},
	section: {
		fontSize: 13,
		padding: 8,
		border: "1px solid gray",
	},
	row: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowtitle: {
		width: "200dp",
	},
});

const Report = () => {
	const { Report, isLoading } = useContext(EventContext);
	let numbers = Report();
	numbers.sort(function (a, b) {
		return b[0] - a[0];
	});
	const EventReport = () => (
		<Document>
			<Page size="A4" orientation="landscape" style={styles.page}>
				<View style={styles.title}>
					<Text> Most Interested Events</Text>
				</View>
				<View style={styles.content}>
					<View style={styles.section}>
						<View style={styles.row}>
							<Text style={styles.rowtitle}>Event Tittle</Text>
							<Text>Going</Text>
							<Text>Interested</Text>
							<Text>Not Interested</Text>
							<Text>Not Going</Text>
						</View>
					</View>
				</View>
				<View style={styles.content}>
					{numbers.map((event) => (
						<View key={event[4]._id} style={styles.section}>
							<View style={styles.row}>
								<Text style={{ width: "160dp" }}>{event[4].title}</Text>
								<Text>{event[0]}</Text>
								<Text>{event[1]}</Text>
								<Text>{event[2]}</Text>
								<Text style={{ marginRight: 20 }}>{event[3]}</Text>
							</View>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<EventReport />} fileName="Event Report.pdf">
				<Button disabled={isLoading}>{isLoading ? "Loading document..." : "Download now!"}</Button>
			</PDFDownloadLink>

			<h1>Report Preview</h1>
			<PDFViewer showToolbar={false} style={{ height: "70vh", width: "100%" }}>
				<EventReport />
			</PDFViewer>
		</div>
	);
};

export default Report;
