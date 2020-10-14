import React from "react";
import "../Sidebar/Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import localHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
// import { useStateValue } from "../StateProvider.js";

const Sidebar = () => {
	// const [{ user }, dispatch] = useStateValue();
	return (
		<div className="sidebar">
			<SidebarRow
				src="https://avatars1.githubusercontent.com/u/44261019?s=460&u=d68284436e44c495ea1ea819bcf5430fc0361d2c&v=4"
				title="Zizoh"
			/>

			<SidebarRow
				Icon={localHospitalIcon}
				title="COVID-19 Information Center"
			/>

			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />

			<SidebarRow Icon={PeopleIcon} title="Friends" />

			<SidebarRow Icon={ChatIcon} title="Messenger" />

			<SidebarRow Icon={StorefrontIcon} title="Marketplace" />

			<SidebarRow Icon={VideoLibraryIcon} title="Videos" />

			<SidebarRow Icon={ExpandMoreOutlined} title="More" />
		</div>
	);
};

export default Sidebar;
