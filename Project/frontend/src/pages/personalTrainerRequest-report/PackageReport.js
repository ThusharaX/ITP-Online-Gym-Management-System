import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@mantine/core";

import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";
import { Table } from "tabler-icons-react";

const styles = StyleSheet.create({
	page: { backgroundColor: "tomato" },
	section: { color: "white", textAlign: "center", margin: 30 },
	body: {
		padding: 35,
	},
	content: {
		padding: 20,
		"@media max-width: 400": {
			flexDirection: "column",
		},
		"@media min-width: 400": {
			flexDirection: "row",
		},
	},
	block: {
		height: 200,
		width: 250,
		backgroundColor: "red",
	},
});

const PackageReport = () => {
	const { requests, isLoading } = useContext(PersonalTrainerRequestContext);

	const PackageReport = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.content}>
					<Text>Personal Trainer Request Report</Text>
				</View>

				{requests.map((item) => (
					<View key={item._id} style={[styles.block, { backgroundColor: "green" }]}>
						<Text>
							<table>
								<tr>
									<th>
										Name : <td>{item.name} </td>
									</th>
									<th>
										Personal Trainer : <td>{item.perTrainer} </td>
									</th>
									<th>
										Time Slot : <td>{item.timeSlot} </td>
									</th>
									<th>
										Train Day : <td>{item.TrainDay} </td>
									</th>
									<th>
										Package : <td>{item.package} </td>
									</th>
								</tr>
							</table>
						</Text>
					</View>
				))}
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
