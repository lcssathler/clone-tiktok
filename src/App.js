import "./App.css";
import Video from "./pages/Video";
import React, { useEffect, useState } from "react";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";



function App() {
	let maxHeight;
	if (window.innerHeight <= 800) {
		maxHeight = window.innerHeight
	}

	const [video, setVideos] = useState([]);

	async function getVideos() {
		const videoCollection = collection(db, "videos");
		const videoSnapshot = await getDocs(videoCollection);
		const videoList = videoSnapshot.docs.map((doc) => doc.data());
		setVideos(videoList);
	}

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<div className="App" style={{ maxHeight: maxHeight }}>
			<header className="app__video">
				{video.map((item) => {
					return (
						<Video
							likes={item.likes}
							comments={item.comments}
							music={item.music}
							name={item.name}
							shares={item.shares}
							description={item.description}
							url={item.url}
							wishList={item.wishList}
						/>
					);
				})}
			</header>
		</div>
	);
}

export default App;
