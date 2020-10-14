import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../MessageSender/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
	const [input, setInput] = useState("");
	const [image, setImage] = useState(null);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const handleSubmit = () => {
		console.log("Submitting");
	};
	return (
		<div className="messageSender">
			<div className="messageSender_top">
				<Avatar src="https://avatars1.githubusercontent.com/u/44261019?s=460&u=d68284436e44c495ea1ea819bcf5430fc0361d2c&v=4" />
				<form>
					<input
						type="text"
						className="messageSender_input"
						placeholder="What's on your mind?"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<input
						type="file"
						className="messageSender_fileSelector"
						value={image}
						onChange={handleChange}
					/>
					<button onClick={handleSubmit} type="submit">
						Hidden Submit
					</button>
				</form>
			</div>

			<div className="messageSender_bottom">
				<div className="messageSender_option">
					<VideocamIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>

				<div className="messageSender_option">
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/video</h3>
				</div>

				<div className="messageSender_option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default MessageSender;
