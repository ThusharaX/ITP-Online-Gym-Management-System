import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
				/>
				<h1 className="singlePostTitle">
					Growth
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span>
						Author:
						<b className="singlePostAuthor">
							<Link className="link" to="/posts?username=Safak">
								Safak
							</Link>
						</b>
					</span>
					<span>1 day ago</span>
				</div>
				<p className="singlePostDesc">
					Equipment maintenance and repair costs Large equipment such as treadmills and ellipticals have a lot of moving
					parts and take on heavy usage from members. Compared with dumbbells or kettlebells, large machines may need
					more upkeep. This means that you may choose to purchase equipment that needs less maintenance, but take a
					lease on machines that take on wear and tear thus needing frequent maintenance or repairs.
					<br />
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos,
					dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
					iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
					impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
					consectetur.
				</p>
			</div>
		</div>
	);
}
