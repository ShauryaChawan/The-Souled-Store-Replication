import React, { useState } from "react";
import "./desktopNav.scss";
import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import { useLocation } from "react-router-dom";

//Icons
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const logo = "./assets/logo.png";

const DesktopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();

  let category = location.pathname.slice(1);
  // console.log(category);

  const categoryData = NavbarData.find((item) => item.category === category);
  // console.log(categoryData);

  return (
    <div className="navbar_container">
      {/* Logo */}
      <NavLink to="/men">
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
          {categoryData &&
            categoryData.navbar.map((item, index) => {
              console.log(item.title); // Console.log the item title
              return (
                <div
                  key={index}
                  className="item"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {item.title} {item.options && <ExpandMoreIcon />}
                  {item.options && (
                    <div
                      className={`dropdown ${
                        item.title === "SHOP BY THEMES" ? "fullWidth" : ""
                      }`}
                    >
                      {item.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                        >
                          <span>
                            <span className={option.bold ? "bold" : ""}>
                              {option.option_title}&nbsp;
                            </span>
                            <sup className="badge">{option.badge}</sup>
                            <sup className="superscript">
                              {option.superscript}
                            </sup>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <div className="right">
          <div className="item input">
            <input type="text" placeholder="What do you want to buy ?" />
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
