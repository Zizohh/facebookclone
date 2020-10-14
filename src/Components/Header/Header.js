import React from "react";
import SearchICon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../Header/Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header_left">
				<img
					// src="https://stpetersburggroup.com/wp-content/uploads/2018/05/Facebook-Logo.png"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
					alt="facebook logo"
				/>
			</div>
			<div className="header_input">
				<SearchICon />
				<input type="text" placeholder="Search Facebook" />
			</div>
			<div className="header_center">
				<div className="header_option header_option_active">
					<HomeIcon fontsize="large" />
				</div>
				<div className="header_option">
					<FlagIcon fonstsize="large" />
				</div>
				<div className="header_option">
					<SubscriptionOutlinedIcon fontsize="large" />
				</div>
				<div className="header_option">
					<StorefrontOutlinedIcon />
				</div>
				<div className="header_option">
					<SupervisedUserCircleIcon />
				</div>
			</div>
			<div className="header_right">
				<div className="header_info">
					<IconButton>
						<Avatar src="https://avatars1.githubusercontent.com/u/44261019?s=460&u=d68284436e44c495ea1ea819bcf5430fc0361d2c&v=4" />
					</IconButton>
					<h4>Zizoh</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>

				<IconButton>
					<ForumIcon />
				</IconButton>

				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>

				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default Header;
