import React from "react";
import "./desktopNav.scss";
import { NavLink } from "react-router-dom";

//Icons
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const logo = "./assets/logo.png";

const DesktopNavbar = () => {
  return (
    <div className="navbar_container">
      {/* Logo */}
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </NavLink>

      {/* Top Red Navbar */}
      <div className="top">
        {/* Top Red Navbar - Left Side */}
        <div className="left">
          <NavLink to="/women">
            <div className="item">WOMEN</div>
          </NavLink>
          <NavLink to="/men">
            <div className="item">MEN</div>
          </NavLink>
          <NavLink to="/kids">
            <div className="item">KIDS</div>
          </NavLink>
        </div>

        {/* Top Red Navbar - Right Side */}
        <div className="right">
          <div className="item">TRACK ORDER</div>
          <div className="item">CONTACT US</div>
          <div className="item">
            <SmartphoneIcon className="icon" /> DOWNLOAD APP
          </div>
        </div>
      </div>

      {/* Bottom White Navbar */}
      <div className="bottom">
        <div className="left">
          <div className="item dropdown">
            TOPWEAR <ExpandMoreIcon />
          </div>
          <div className="item dropdown">
            BOTTOMWEAR <ExpandMoreIcon />
          </div>
          <div className="item dropdown">
            SHOES & ACCESSORIES <ExpandMoreIcon />
          </div>
          <div className="item">BASICS</div>
          <div className="item dropdown">
            COLLECTIONS <ExpandMoreIcon />
          </div>
          <div className="item dropdown">
            SHOP BY tHEMES <ExpandMoreIcon />
          </div>
          <div className="item">MEMBESHIP</div>
        </div>
        <div className="right">
          <div className="item input">
            <input type="text" placeholder="What do you want to buy ?"/>
            <SearchIcon className="icon" />
          </div>
          <div className="item">
            <PersonIcon className="icon" />
          </div>
          <div className="item">
            <FavoriteBorderIcon className="icon" />
          </div>
          <div className="item">
            <ShoppingCartIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
