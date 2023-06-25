import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import Sidebar from "./components/sidebar/Sidebar";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NewPostIcon from "@mui/icons-material/AddBox";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Video({
	likes,
	comments,
	wishList,
	shares,
	name,
	description,
	music,
	url,
}) {
	const videoRef = useRef(null);
	const [play, setPlay] = useState(false);

	function handdleStart() {
		if (play) {
			videoRef.current.pause();
			setPlay(false);
		} else {
			videoRef.current.play();
			setPlay(true);
		}
	}

	window.onwheel = function () {
		if (play) {
			videoRef.current.pause();
			setPlay(false);
		}
	};

	return (
		<div className="video">
			<nav className="navbar-top">
				<LiveTvIcon className="live-tv-icon" fontSize="large" />
				<div className="tabs">
					<p>Following</p>
					<p>For You</p>
				</div>
				<SearchIcon className="search-icon" fontSize="large" />
			</nav>

			<video
				className="video__player"
				loop
				onClick={handdleStart}
				ref={videoRef}
				src={url}
			></video>

			<Sidebar
				likes={likes}
				comments={comments}
				wishList={wishList}
				shares={shares}
			/>
			<VideoFooter name={name} description={description} music={music} />

			<nav className="navbar-bottom">
				<HomeIcon fontSize="large" className="home-icon" />
				<GroupOutlinedIcon fontSize="large" className="friends-icon" />
				<NewPostIcon fontSize="large" className="new-post-icon" />
				<InboxIcon fontSize="large" className="inbox-icon" />
				<PersonOutlineIcon fontSize="large" className="perfil-icon" />
			</nav>
		</div>
	);
}

export default Video;
