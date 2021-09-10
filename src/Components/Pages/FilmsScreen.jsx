import React from 'react'
import FeaturedSlider from '../Contents/FeaturedSlider'
import HorizSlider from '../Contents/HorizSlider'
import filmsImage from "../../Assets/images/slider/netflix-films-banner-01.jpg";

export default function FilmsScreen() {
    return (
        <div>
            <FeaturedSlider image={filmsImage}/>
            <HorizSlider  />
        </div>
    )
}
