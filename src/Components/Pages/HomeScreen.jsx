import React from "react";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
import FeaturedSlider from "../Contents/FeaturedSlider";
import CatSlider from "../Contents/CatSlider";
import homeImage from "../../Assets/images/slider/netflix-home-banner-02.jpg";


const Home = (props) => {
  return (
    <>
      {/* <Header {...props} /> */}
      <FeaturedSlider image={homeImage} {...props} />
      <CatSlider {...props} />
      {/* <Footer {...props} /> */}
    </>
  );
};

export default Home;
