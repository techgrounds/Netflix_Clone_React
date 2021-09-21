import React from "react";

import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";

import FeaturedSlider from "../../Contents/FeaturedSlider";
import CatSlider from "../../Contents/CatSlider";
import FilmsCategories from "../../Contents/FilmsCategories";
import FilmsImage from "../../../Assets/images/slider/netflix-films-banner-01.jpg";

const Films = () => {
  return (
    <>
    <Header />
    <div className="films-container">
      <FeaturedSlider image={FilmsImage} />
      <CatSlider categories={<FilmsCategories/>}/>
    </div>
    <Footer />
    </>
  );
};

export default Films;
