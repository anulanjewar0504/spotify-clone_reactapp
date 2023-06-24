import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Header.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDataLayerValue } from "./DataLayer";

function Header() {
    const [{ user },dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlinedIcon />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="header__right">
        <AccountCircleOutlinedIcon src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;