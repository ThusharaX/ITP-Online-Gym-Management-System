import { Link } from "react-router-dom";
import "./sidebar.css";
import { Table, Box, TextInput, Button, Group } from "@mantine/core";
import { Search } from "tabler-icons-react";

export default function Sidebar() {
	return (
		<div className="sidebar">
			{/* <div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt=""
				/>
				<p>
					Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis
					proident.
				</p>
			</div> */}
			<div>
				<Box sx={{ maxWidth: 300 }} mx="auto">
					<TextInput
						required
						placeholder="Search"
						leftIcon={<Search size={16} />}
						styles={(theme) => ({
							root: {
								marginTop: 50,
							},
						})}
					/>
				</Box>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<Link className="link" to="/posts?cat=Life">
							Life
						</Link>
					</li>
					<li className="sidebarListItem">
						<Link className="link" to="/posts?cat=Music">
							Music
						</Link>
					</li>
					<li className="sidebarListItem">
						<Link className="link" to="/posts?cat=Sport">
							Sport
						</Link>
					</li>
					<li className="sidebarListItem">
						<Link className="link" to="/posts?cat=Style">
							Style
						</Link>
					</li>
					<li className="sidebarListItem">
						<Link className="link" to="/posts?cat=Tech">
							Tech
						</Link>
					</li>
					<li className="sidebarListItem">
						<Link className="link" to="/posts?cat=Cinema">
							Cinema
						</Link>
					</li>
				</ul>
			</div>

			{/* my */}
			<div className="sidebarItem">
				<span className="sidebarTitle">TAG CLOUDS</span>
				<ul className="sidebarList">
					<Table striped highlightOnHover>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Sport">
								Sport
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Sport">
								Sport
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Sport">
								Sport
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Style">
								Style
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Tech">
								Tech
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Cinema">
								Cinema
							</Link>
						</td>
					</Table>
				</ul>
			</div>

			<div className="sidebarItem">
				<span className="sidebarTitle">TAG CLOUDS</span>
				<ul className="sidebarList">
					<Table striped highlightOnHover>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Sport">
								Sport
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Sport">
								Sport
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Sport">
								Sport
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Style">
								Style
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Tech">
								Tech
							</Link>
						</td>
						<td className="sidebarListItem">
							<Link className="link" to="/posts?cat=Cinema">
								Cinema
							</Link>
						</td>
					</Table>
				</ul>
			</div>

			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-facebook-square"></i>
					<i className="sidebarIcon fab fa-instagram-square"></i>
					<i className="sidebarIcon fab fa-pinterest-square"></i>
					<i className="sidebarIcon fab fa-twitter-square"></i>
				</div>
			</div>
		</div>
	);
}
