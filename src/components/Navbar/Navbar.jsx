import React from "react";
import "./navbar.scss";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const logo = "./assets/logo.png";

const navData = [
  {
    title: "TOPWEAR",
    options: [
      {
        option_title: "T-shirts",
        new: false,
      },
      {
        option_title: "Oversized T-shirts",
        new: true,
      },
      {
        option_title: "Shirts",
        new: false,
      },
      {
        option_title: "Polos",
        new: false,
      },
      {
        option_title: "Windcheaters",
        new: true,
      },
      {
        option_title: "Tank Top & Vests",
        new: false,
      },
    ],
  },
  {
    title: "BOTTOMWEAR",
    options: [
      {
        option_title: "Jeans",
        new: false,
      },
      {
        option_title: "Cotton Pants",
        new: true,
      },
      {
        option_title: "Cargo",
        new: true,
      },
      {
        option_title: "Joggers",
        new: false,
      },
      {
        option_title: "Shorts",
        new: false,
      },
    ],
  },
  {
    title: "SHOES & ACCESSORIES",
    options: [
      {
        option_title: "Shoes",
        new: true,
      },
      {
        option_title: "Windcheaters & Umbrellas",
        new: false,
      },
      {
        option_title: "Prefumes",
        new: true,
      },
      {
        option_title: "Socks",
        new: false,
      },
      {
        option_title: "Caps",
        new: false,
      },
      {
        option_title: "Backpacks",
        new: false,
      },
    ],
  },
];

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="top">
        <div className="left">
          <NavLink to="/">
            <div className="item">WOMEN</div>
          </NavLink>
          <NavLink to="/">
            <div className="item">MEN</div>
          </NavLink>
          <NavLink to="/">
            <div className="item">KIDS</div>
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/">
            <div className="item">TRACK ORDER</div>
          </NavLink>
          <NavLink to="/">
            <div className="item">CONTACT US</div>
          </NavLink>
          <NavLink to="/">
            <div className="item">
              <SmartphoneIcon className="icon" /> DOWNLOAD APP
            </div>
          </NavLink>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="item dropdown">TOPWEAR</div>
          <div className="item dropdown">BOTTOMWEAR</div>
          <div className="item dropdown">SHOES & ACCESSORIES</div>
          <div className="item">BASICS</div>
          <div className="item dropdown">COLLECTIONS</div>
          <div className="item dropdown">SHOP BY tHEMES</div>
          <div className="item">MEMBESHIP</div>
        </div>
        <div className="right">
          <div className="item">
            <SearchIcon className="icon"/>
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

export default Navbar;
