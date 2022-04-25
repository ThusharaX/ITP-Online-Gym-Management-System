import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">Welcome to Our Blog Page</span>
				<span className="headerTitleLg">BLOG</span>
			</div>
			<img
				className="headerImg"
				src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt=""
			/>
		</div>
	);
}
