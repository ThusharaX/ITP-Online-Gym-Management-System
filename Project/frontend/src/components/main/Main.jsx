import React from "react";
import videoBg from "../../assets/videoBg.mp4";
import AddPersonalTrainerRequest from "../../pages/personalTrainerRequest/AddPersonalTrainerRequest";
import "./sty.css";

const Main = () => {
	return (
		<div className="mainTrainer">
			<div className="overlayTrainer"></div>
			<video className="myVideo" src={videoBg} autoPlay loop muted />

			<div className="contentTrainer">
				<AddPersonalTrainerRequest />
				<h1 className="topHTrainer">
					Create your Request
					<br />
					Welcome!!!
				</h1>
			</div>
		</div>
	);
};

export default Main;
