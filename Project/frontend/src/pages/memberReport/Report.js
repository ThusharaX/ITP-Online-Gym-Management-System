import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import MemberContext from "../../contexts/MemberContext";

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
	const { members, isLoading } = useContext(MemberContext);

	const MemberReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>Members Report</Text>
				</View>

				{members.map((item) => (
					<View key={item._id} style={styles.section}>
						<Text style={{ fontSize: 12 }}>
							<title style={{ fontSize: 20 }}>
								{item.firstName} {item.lastName}
							</title>
							<p>
								<strong>ID : </strong> {item._id}
								<strong>First Name : </strong> {item.firstName}
								<strong>Last Name : </strong> {item.lastName}
								<strong>Username : </strong> {item.username}
								<strong>NIC : </strong> {item.nic}
								<strong>Email : </strong> {item.email}
								<strong>DOB : </strong> {item.dob}
								<strong>Phone Number : </strong> {item.phoneNumber}
							</p>
						</Text>
					</View>
				))}
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
