import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import React from "react";
import "../Post/Post.css";

const Post = ({ profilePic, message, timestamp, imgName, userName }) => {
	return (
		<div className="post">
			<div className="post_top">
				<Avatar src={profilePic} className="post_avatar" />
				<div className="post_top_info">
					<h3>{userName}</h3>
					<p>{new Date(parseInt(timestamp)).toUTCString()}</p>
				</div>
			</div>

			<div className="post_bottom">
				<p>{message}</p>
				{/* image is comming here later */}
			</div>

			<div className="post_options">
				<div className="post_option">
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className="post_option">
					<ChatBubbleOutlinedIcon />
					<p>Comment</p>
				</div>

				<div className="post_option">
					<NearMeIcon />
					<p>Share</p>
				</div>

				<div className="post_option">
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	);
};

export default Post;
