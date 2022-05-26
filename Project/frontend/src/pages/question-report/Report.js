import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import QuestionContext from "../../contexts/QuestionContext";
const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#E4E4E4",
	},
	title: {
		fontSize: 8,
		textAlign: "center",
		margin: 10,
		// textTransform: "uppercase",
	},
	section: {
		margin: 5,
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
	const { questions, isLoading } = useContext(QuestionContext);

	const QuestionReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.title}>
					<Text>This Month Questions</Text>

					{questions.map((item) => (
						<View key={item._id} style={styles.section}>
							<View style={styles.row}>
								<Text>{item.name}</Text>
								{/* <Text>{item.title}</Text> */}
								<Text>{item.content}</Text>
								<Text>{item.created_at}</Text>
							</View>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<QuestionReport />} fileName="Question Report.pdf"></PDFDownloadLink>
			<h1 align="center">Report review</h1>

			{/* <h1 textAlign="center"   >Report Preview</h1> */}
			<PDFViewer
				showToolbar={false}
				style={{
					width: "100%",
					height: "500px",
				}}
			>
				<QuestionReport />
			</PDFViewer>
			<Button disabled={isLoading}>{isLoading ? "Loading document..." : "Download now!"}</Button>
		</div>
	);
};

export default Report;
