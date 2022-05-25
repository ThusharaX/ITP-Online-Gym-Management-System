import React from "react";

// Page components
import MemberTableScrollArea from "./MemberList";
import Search from "./Search";
import "./index.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

// MemberProvider
import { MemberProvider } from "../../contexts/MemberContext";

const Member_List = () => {
	return (
		<div>
			<div className="member-form-container">
				<h1>Member</h1>
			</div>
			<div>
				<Button style={{ marginLeft: 20 }}>
					<Link style={{ textDecoration: "none", color: "#fff" }} to="/memberReport">
						Member Report
					</Link>
				</Button>

				<MemberProvider>
					{/*search Member */}
					<Search />
					{/* Get all Members */}
					<MemberTableScrollArea />
				</MemberProvider>
			</div>
		</div>
	);
};

export { Member_List };
