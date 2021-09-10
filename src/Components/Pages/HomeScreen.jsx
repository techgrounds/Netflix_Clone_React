import React from "react";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
import HomeFeaturedSlider from "../Contents/FeaturedSlider";
import HomeHorizSlider from "../Contents/HorizSlider";
import homeImage from "../../Assets/images/slider/netflix-home-banner-02.jpg";


const Home = (props) => {
  return (
    <>
      {/* <Header {...props} /> */}
      <HomeFeaturedSlider image={homeImage} {...props} />
      <HomeHorizSlider {...props} />
      {/* <Footer {...props} /> */}
    </>
  );
};

export default Home;
