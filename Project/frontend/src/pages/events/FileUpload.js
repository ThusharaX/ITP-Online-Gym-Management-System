import axios from "axios";
import { Button, Group, Text } from "@mantine/core";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { Component } from "react";

class App extends Component {
	handleSubmit = (e) => {
		// e.preventDefault();
		const file = e.target[0]?.files[0];

		if (!file) return;

		const storageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				setProgresspercent(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImgUrl(downloadURL);
				});
			}
		);
	};
	state = {
		// Initially, no file is selected
		selectedFile: null,
	};

	// On file select (from the pop up)
	onFileChange = (event) => {
		// Update the state
		this.setState({ selectedFile: event.target.files[0] });
	};

	// On file upload (click the upload button)
	onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);

		// Request made to the backend api
		// Send formData object
		axios.post("api/uploadfile", formData);
	};

	// File content to be displayed after
	// file upload is complete
	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<>
					<div style={{ marginTop: "5px" }}>
						<Text size="xs" weight={300}>
							{" "}
							File Name: {this.state.selectedFile.name}
						</Text>
						<Text weight={300} size="xs">
							{" "}
							File Type: {this.state.selectedFile.type}
						</Text>
					</div>
				</>
			);
		} else {
			return (
				<>
					<Text style={{ marginTop: "15px" }}> Choose before Pressing the Upload button </Text>
				</>
			);
		}
	};

	render() {
		return (
			<div>
				<Text size="md" weight={500}>
					Event Picture
				</Text>
				<div>
					<input type="file" onChange={this.onFileChange} />
					<Button
						style={{ margin: "10px 10px 10px 10px" }}
						onClick={this.onFileUpload}
						color={"gray"}
						type="submit"
						radius="sm"
						size="sm"
						compact
					>
						Submit
					</Button>
				</div>
				{this.fileData()}
			</div>
		);
	}
}

export default App;
