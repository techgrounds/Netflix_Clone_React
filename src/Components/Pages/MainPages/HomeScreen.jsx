import React from "react";

import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";

import FeaturedSlider from "../../Contents/FeaturedSlider";
import CatSlider from "../../Contents/CatSlider";
import HomeImage from "../../../Assets/images/slider/netflix-home-banner-02.jpg";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className="home-container">
        <FeaturedSlider image={HomeImage} />
        <CatSlider />
      </div>
      <Footer />
    </>
  );
};

export default Home;
