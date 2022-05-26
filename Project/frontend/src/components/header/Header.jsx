import "./header.css";
import { Button } from "@mantine/core";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">Welcome to Our Blog Page,Stay Tuned</span>
				<span className="headerTitleLg">BLOG</span>
			</div>
			<img
				className="headerImg"
				src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt=""
			/>
		</div>
	);
}
