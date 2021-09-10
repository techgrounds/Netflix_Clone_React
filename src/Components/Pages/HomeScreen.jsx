import React from "react";
import Header from "../Layout/Header";
import HomeFeaturedSlider from "../Contents/HomeFeaturedSlider";
import HomeCatSlider from "../Contents/HomeHorizSlider";
import Footer from "../Layout/Footer";

const Home = (props) => {
  return (
    <>
      <Header {...props} />
      <HomeFeaturedSlider {...props} />
      <HomeCatSlider {...props} />
      <Footer {...props} />
    </>
  );
};

export default Home;
