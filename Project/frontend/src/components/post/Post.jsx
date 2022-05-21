import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
	return (
		<div className="post">
			<img className="postImg" src={img} alt="" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">
						<Link className="link" to="/posts?cat=Music">
							Fitness
						</Link>
					</span>
					<span className="postCat">
						<Link className="link" to="/posts?cat=Music">
							Healthy
						</Link>
					</span>
				</div>
				<span className="postTitle">
					<Link to="/post/abc" className="link">
						Growth
					</Link>
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Equipment maintenance and repair costs Large equipment such as treadmills and ellipticals have a lot of moving
				parts and take on heavy usage from members. Compared with dumbbells or kettlebells, large machines may need more
				upkeep. This means that you may choose to purchase equipment that needs less maintenance, but take a lease on
				machines that take on wear and tear thus needing frequent maintenance or repairs.
			</p>
		</div>
	);
}
