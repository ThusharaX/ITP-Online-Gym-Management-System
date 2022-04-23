import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blog.css";

// SampleProvider
import { BlogProvider } from "../../contexts/BlogContext";

export default function Blog() {
	const location = useLocation();
	//console.log(location);
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	);
}
