import "./App.css";
import Video from "./pages/Video";
import React from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

function App() {
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
				<Video
					likes={100}
					comments={200}
					wishList={500}
					shares={300}
					name="Lucas Sathler"
					description="Galo goleiro boladão"
					music="Still Loving You - Scorpions"
					url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
				/>
				<Video
					likes={100}
					comments={200}
					wishList={500}
					shares={300}
					name="Lucas Sathler"
					description="Galo goleiro boladão"
					music="Still Loving You - Scorpions"
					url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
				/>
				<Video
					likes={100}
					comments={200}
					wishList={500}
					shares={300}
					name="Lucas Sathler"
					description="Galo goleiro boladão"
					music="Still Loving You - Scorpions"
					url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
				/>
			</header>
		</div>
	);
}

export default App;
