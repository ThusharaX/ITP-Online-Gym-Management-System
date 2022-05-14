import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import SampleContext from "../../contexts/SampleContext";

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

const Report = () => {
	const { samples, isLoading } = useContext(SampleContext);

	const SampleReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>Sample Report</Text>
				</View>

				{samples.map((item) => (
					<View key={item._id} style={styles.section}>
						<Text>
							<h2>{item.title}</h2>
							<p>
								<strong>ID:</strong> {item._id} | <strong>Content:</strong> {item.content}
							</p>
						</Text>
					</View>
				))}
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<SampleReport />} fileName="Sample Report.pdf">
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
				<SampleReport />
			</PDFViewer>
		</div>
	);
};

export default Report;
