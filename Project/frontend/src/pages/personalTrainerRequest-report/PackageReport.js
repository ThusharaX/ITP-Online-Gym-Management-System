import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";
import { Table } from "tabler-icons-react";

const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#E4E4E4",
	},
	section: {
		margin: 10,
		padding: 10,
	},
});

const PackageReport = () => {
	const { requests, isLoading } = useContext(PersonalTrainerRequestContext);

	const PackageReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>Personal Trainer Request Report</Text>
				</View>
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<PackageReport />} fileName="Package Report.pdf">
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
				<PackageReport />
			</PDFViewer>
		</div>
	);
};

export default PackageReport;
