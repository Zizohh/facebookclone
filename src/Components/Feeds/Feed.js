import React from "react";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

const Feed = () => {
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			<Post
				profilePic="https://avatars1.githubusercontent.com/u/44261019?s=460&u=d68284436e44c495ea1ea819bcf5430fc0361d2c&v=4"
				message="Yoo @ this point i am really really pumpped!"
				timestamp="1601599998560"
				imgName="imgName"
				userName="Zizoh"
			/>

			<Post
				profilePic="https://avatars1.githubusercontent.com/u/44261019?s=460&u=d68284436e44c495ea1ea819bcf5430fc0361d2c&v=4"
				message="Yoo @ this point i am really really pumpped!"
				timestamp="1601599998560"
				imgName="imgName"
				userName="Zizoh"
			/>

			{/* {	
				postData.map(entry => (
					<Post
						profilePic={entry.avatar}
						message={entry.text}
						timestamp={entry.timestamp}
						imgName={entry.imgName}
						userName={entry.user}
					/>
				))
			} */}
		</div>
	);
};

export default Feed;
