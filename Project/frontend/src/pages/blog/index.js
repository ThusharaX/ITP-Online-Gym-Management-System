import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { Button, Group } from "@mantine/core";
import { BrandTwitter } from "tabler-icons-react";
import "./blog.css";

// SampleProvider
import { BlogProvider } from "../../contexts/BlogContext";

export default function Blog() {
	const location = useLocation();
	//console.log(location);
	return (
		<>
			<Header />
			<Group mt="xl" position="center">
				<Button
					variant="gradient"
					gradient={{ from: "red", to: "black", deg: 105 }}
					styles={(theme) => ({
						root: {
							border: 0,
							height: 42,
							paddingLeft: 50,
							paddingRight: 50,
							marginRight: 100,

							"&:hover": {
								backgroundColor: theme.fn.darken("#00acee", 0.05),
							},
						},
					})}
				>
					Growth
				</Button>

				<Button
					variant="gradient"
					gradient={{ from: "red", to: "black", deg: 105 }}
					styles={(theme) => ({
						root: {
							border: 0,
							height: 42,
							paddingLeft: 50,
							paddingRight: 50,
							marginRight: 100,

							"&:hover": {
								backgroundColor: theme.fn.darken("#00acee", 0.05),
							},
						},
					})}
				>
					Experience
				</Button>
				<Button
					variant="gradient"
					gradient={{ from: "red", to: "black", deg: 105 }}
					styles={(theme) => ({
						root: {
							border: 0,
							height: 42,
							paddingLeft: 50,
							paddingRight: 50,
							marginRight: 100,

							"&:hover": {
								backgroundColor: theme.fn.darken("#00acee", 0.05),
							},
						},
					})}
				>
					Leadership
				</Button>
				<Button
					variant="gradient"
					gradient={{ from: "red", to: "black", deg: 105 }}
					styles={(theme) => ({
						root: {
							border: 0,
							height: 42,
							paddingLeft: 50,
							paddingRight: 50,
							marginRight: 100,

							"&:hover": {
								backgroundColor: theme.fn.darken("#00acee", 0.05),
							},
						},
					})}
				>
					Healthy
				</Button>
				<Button
					variant="gradient"
					gradient={{ from: "red", to: "black", deg: 105 }}
					styles={(theme) => ({
						root: {
							border: 0,
							height: 42,
							paddingLeft: 50,
							paddingRight: 50,
							marginRight: 100,

							"&:hover": {
								backgroundColor: theme.fn.darken("#00acee", 0.05),
							},
						},
					})}
				>
					Fitness
				</Button>
				<Button
					variant="gradient"
					gradient={{ from: "red", to: "black", deg: 105 }}
					styles={(theme) => ({
						root: {
							border: 0,
							height: 42,
							paddingLeft: 50,
							paddingRight: 50,
							marginRight: 100,

							"&:hover": {
								backgroundColor: theme.fn.darken("#00acee", 0.05),
							},
						},
					})}
				>
					Wellness
				</Button>
			</Group>

			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	);
}
