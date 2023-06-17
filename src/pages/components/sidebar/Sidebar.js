import React, { useState } from "react";
import "./sidebar.css";
import UnfilledHeartIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FilledHeartIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/InsertComment";
import WishlistIcon from "@mui/icons-material/TurnedIn";
import ShareIcon from "@mui/icons-material/Share";

function 	Sidebar( {likes, comments, shares, wishList}) {
	const [isLiked, setIsLiked] = useState(false);
	function handdleLike() {
		setIsLiked(!isLiked);
	}

	return (
		<div className="sidebar">
			<div className="sidebar_options" onClick={handdleLike}>
				{isLiked ? (<FilledHeartIcon fontSize="large" />) : (<UnfilledHeartIcon fontSize="large" className="icon" />)}
				<p> {isLiked ? likes + 1 : likes} </p>
			</div>

			<div className="sidebar_options">
				<CommentIcon fontSize="large" className="icon" />
				<p>{comments}</p>
			</div>

			<div className="sidebar_options">
				<WishlistIcon fontSize="large" className="icon" />
				<p> { wishList}</p>
			</div>

			<div className="sidebar_options">
				<ShareIcon fontSize="large" className="icon" />
				<p>{shares}</p>
			</div>
			<img
				className="record-img"
				alt="Icon of a record cd spinning"
				src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
			/>
		</div>
	);
}

export default Sidebar;
