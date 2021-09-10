import React from "react";

import FeaturedSlider from "../Contents/FeaturedSlider";
import CatSlider from "../Contents/CatSlider";
import homeImage from "../../Assets/images/slider/netflix-home-banner-02.jpg";



const Home = (props) => {
  return (
    <>
      <FeaturedSlider image={homeImage} {...props} />
      <CatSlider {...props} />
    </>
  );
};

export default Home;
