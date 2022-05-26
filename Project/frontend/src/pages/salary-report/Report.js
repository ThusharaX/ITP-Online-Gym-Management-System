import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import SalaryContext from "../../contexts/SalaryContext";

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
		fontSize: 12,
		margin: 5,
		padding: 5,
	},
	row: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 5,
	},
});

const Report = () => {
	const { salaries, isLoading } = useContext(SalaryContext);

	const SalaryReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.title}>
					<Text>Salary List</Text>

					{salaries.map((salary) => (
						<View key={salary._id} style={styles.section}>
							<View style={styles.row}>
								<Text>NIC:</Text>
								<Text>{salary.nic}</Text>
								<Text>Month:</Text>
								<Text>{salary.month}</Text>
								<Text>Total Salary:</Text>
								<Text>{salary.totalSalary}</Text>
							</View>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<SalaryReport />} fileName="salary Report.pdf">
				<Button style={{ marginLeft: 20 }} disabled={isLoading}>
					{isLoading ? "Loading document..." : "Download now!"}
				</Button>
			</PDFDownloadLink>

			<h1>Report Preview</h1>
			<PDFViewer
				showToolbar={false}
				style={{
					width: "100%",
					height: "500px",
				}}
			>
				<SalaryReport />
			</PDFViewer>
		</div>
	);
};

export default Report;
