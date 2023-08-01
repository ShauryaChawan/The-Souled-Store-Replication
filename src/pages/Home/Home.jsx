import React from "react";
import "./home.scss";

// Components
import Slider from "./Home Slider/Slider";
import ShopByFandom from "./Home Shop By Fandom/ShopByFandom";
import Collections from "./Home Collections/Collections";
import Categories from "./Home Categories/Categories";
import OfficialMerchandise from "./Home Official Merchandise/OfficialMerchandise";
import TopSelling from "./Home Top Selling/TopSelling";
import Membership from "./Home Membership/Membership";
import CelebrityCloset from "./Home Celebrity Closet/CelebrityCloset";
import HomeFooter from "./Home Footer/HomeFooter";


const Home = () => {
  return (
    <div className="home_container">
      {/* Slider */}
      <Slider/>
      {/* Shop By Fandom */}
      <ShopByFandom/>
      {/* Colletions */}
      <Collections/>
      {/* Categories */}
      <Categories/>
      {/* Official Merchandise */}
      <OfficialMerchandise/>
      {/* Top Selling */}
      <TopSelling/>
      {/* Membership */}
      <Membership/>
      {/* Straight Out Of Celebrity Closets */}
      <CelebrityCloset/>
      {/* Home Footer */}
      <HomeFooter/>
    </div>
  );
};

export default Home;
