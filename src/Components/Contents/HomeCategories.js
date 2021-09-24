import React from 'react'
import movieDataRequests from "../../utilities/config";
import CatSlider from "./CatSlider";


export default function HomeCategories() {
    return (
        <>
            <CatSlider
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            />

            <CatSlider
                title="Nineties"
                fetchUrl={movieDataRequests.fetchNineties}
                // isLargeRow
            />
             <CatSlider
                title="Eighties"
                fetchUrl={movieDataRequests.fetchEighties}
                // isLargeRow
            />
      </>
    )
}
