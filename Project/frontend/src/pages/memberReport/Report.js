import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import MemberContext from "../../contexts/MemberContext";

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
	const { members, isLoading } = useContext(MemberContext);

	const MemberReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.title}>
					<Text>Employee List</Text>

					{members.map((member) => (
						<View key={member._id} style={styles.section}>
							<View style={styles.row}>
								<Text>Username:</Text>
								<Text>{member.username}</Text>
								<Text>NIC:</Text>
								<Text>{member.nic}</Text>
								<Text>Email:</Text>
								<Text>{member.email}</Text>
								<Text>Phone:</Text>
								<Text>{member.phoneNumber}</Text>
							</View>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);

	return (
		<div>
			<PDFDownloadLink document={<MemberReport />} fileName="Member Report.pdf">
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
				<MemberReport />
			</PDFViewer>
		</div>
	);
};

export default Report;
