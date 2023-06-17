import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <h1>Lucas Sathler</h1>
      <p>Description</p>
      <div class="music-bar">
        <MusicNoteIcon className="music-icon" />
        <div class="music-title">
          <p>Music title</p>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
