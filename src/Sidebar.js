import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from "./DataLayer";
function Sidebar(){
    const [{ playlists },dispatch] = useDataLayerValue();
    return (
        <div className="Sidebar">
            <img className="sidebar__logo"
            src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
            alt=""/>
            <SidebarOption Icon={HomeOutlinedIcon}  title="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;
