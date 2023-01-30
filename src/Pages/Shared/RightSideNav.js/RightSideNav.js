import React from "react";
import BrandsCarousel from "./BrandsCarousel";
import Links from "./Links";
import Logins from "./Logins";
import TodaysPick from "./TodaysPick";

const RightSideNav = () => {
  return (
    <div>
      <Logins />
      <Links />
      <TodaysPick />
      <BrandsCarousel />
    </div>
  );
};

export default RightSideNav;
