import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import EmployeeContext from "../../contexts/EmployeeContext";

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
	const { employees, isLoading } = useContext(EmployeeContext);

	const EmployeeReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.title}>
					<Text>Employee List</Text>

					{employees.map((employee) => (
						<View key={employee._id} style={styles.section}>
							<View style={styles.row}>
								<Text>Username:</Text>
								<Text>{employee.username}</Text>
								<Text>NIC:</Text>
								<Text>{employee.nic}</Text>
								<Text>Email:</Text>
								<Text>{employee.email}</Text>
								<Text>Phone:</Text>
								<Text>{employee.phoneNumber}</Text>
							</View>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<EmployeeReport />} fileName="Employee Report.pdf">
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
				<EmployeeReport />
			</PDFViewer>
		</div>
	);
};

export default Report;
