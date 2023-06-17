import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({ name, description, music }) {
	return (
		<div className="videoFooter">
			<h1> { name } </h1>
			<p> { description} </p>
			<div class="music-bar">
				<MusicNoteIcon className="music-icon" />
				<div class="music-title">
					<p> { music} </p>
				</div>
			</div>
		</div>
	);
}

export default VideoFooter;
