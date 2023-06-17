import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import Sidebar from "./components/sidebar/Sidebar";

function Video({ likes, comments,wishList, shares, name, description, music, url }) {
	const videoRef = useRef(null);
	const [play, setPlay] = useState(false);
	function handdleStart() {
		if (play) {
			videoRef.current.play();
			setPlay(false);
		} else {
			videoRef.current.pause();
			setPlay(true);
		}
	}

	return (
		<div className="video">
			<video
				className="video__player"
				loop
				onClick={handdleStart}
				ref={videoRef}
				src= {url}
			></video>
			<Sidebar likes={likes} comments={comments} wishList = {wishList} shares={shares} />
			<VideoFooter name={name} description={description} music={music} />
		</div>
	);
}

export default Video;
