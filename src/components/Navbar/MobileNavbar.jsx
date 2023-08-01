import React, { useState } from "react";
import "./mobileNav.scss";
import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const logo = "./assets/logo.png";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("men");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categoryData = NavbarData.find((item) => item.category === category);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile_navbar_container">
      <div className="top">
        <p>Download Our App & Get 10% Additional Cashback On All Orders</p>
        <div className="right">
          <SmartphoneIcon className="icon" /> Open App
        </div>
      </div>

      {/* Logo */}
      <NavLink to="/men">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </NavLink>

      <div className="bottom">
        <div className="left">
          <MenuIcon className="icon" onClick={toggleMenu} />
          {/* {console.log(isOpen)} */}
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <FavoriteBorderIcon className="icon" />
          <ShoppingCartIcon className="icon" />
        </div>
      </div>

      <div className="navbar_container" style={{ transform: isOpen ? "translateX(-0%)" : "translateX(-100%)" }}>
      {/* <div className="navbar_container"> */}
        <div className="navbar">
          <div className="child1">
            <img src={logo} alt="" />
            <button>Login/Register</button>
          </div>

          <div className="category">
            <div className="items">
              <p
                className={category === "men" ? "active" : ""}
                onClick={() => {
                  setCategory("men");
                }}
              >
                Men
              </p>
              <p
                className={category === "women" ? "active" : ""}
                onClick={() => {
                  setCategory("women");
                }}
              >
                Women
              </p>
              <p
                className={category === "kids" ? "active" : ""}
                onClick={() => {
                  setCategory("kids");
                }}
              >
                Kids
              </p>
            </div>
            <div className="category_part1">
              {categoryData &&
                categoryData.navbar.map((item, index) => {
                  console.log(item.title); // Console.log the item title
                  <div
                    key={index}
                    className="item"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.title}
                  </div>;
                })}
            </div>
          </div>
        </div>
        <div className="exit" onClick={toggleMenu}></div>
      </div>
    </div>
  );
};

export default MobileNavbar;
