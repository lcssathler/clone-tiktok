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
      <img
        className="record-img"
        alt="Icon of a record cd spinning"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
