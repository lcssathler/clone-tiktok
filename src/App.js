import "./App.css";
import Video from "./pages/Video";
import React, { useEffect, useState } from "react";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

function App() {
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
		<div className="App">
			<header className="app__video">
				<nav className="navbar-top">
					<LiveTvIcon className="live-tv-icon" fontSize="large" />
					<div className="tabs">
						<p>Following</p>
						<p>For You</p>
					</div>
					<SearchIcon className="search-icon" fontSize="large" />
				</nav>

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
