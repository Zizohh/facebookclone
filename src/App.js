import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feeds/Feed";
import Widget from "./Components/Widgets/Widget";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app_body">
				<Sidebar />
				<Feed />
				<Widget />
			</div>
		</div>
	);
}

export default App;
