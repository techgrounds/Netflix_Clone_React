import React from 'react'
import FeaturedSlider from '../Contents/FeaturedSlider'
import CatSlider from '../Contents/CatSlider';
import filmsImage from "../../Assets/images/slider/netflix-films-banner-01.jpg";

export default function FilmsScreen() {
    return (
        <div>
            <FeaturedSlider image={filmsImage}/>
            <CatSlider />
        </div>
    )
}
