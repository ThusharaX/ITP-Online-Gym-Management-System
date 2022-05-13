import React from "react";
import videoBg from "../../assets/videoBg.mp4";
import AddPersonalTrainerRequest from "../../pages/personalTrainerRequest/AddPersonalTrainerRequest";

const Main = () => {
	return (
		<div className="main">
			<div className="overlay"></div>
			<video className="myVideo" src={videoBg} autoPlay loop muted />

			<div className="content">
				<AddPersonalTrainerRequest />
				<h1 className="topH">
					Create your Request
					<br />
					Welcome!!!
				</h1>
			</div>
		</div>
	);
};

export default Main;
