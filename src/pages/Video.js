import React, { useRef, useState} from "react";
import "./video.css";

function Video() {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);
    function handdleStart (){
        if(play) {
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
        ref={videoRef}    src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      ></video>
    </div>
  );
}

export default Video;
