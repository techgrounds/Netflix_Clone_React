import React from "react";
import movieDataRequests from "../../../utilities/config";
import CatSlider from "./CatSlider";

export default function HomeCategories(props) {
    return (
        <>
            <CatSlider
                props={props}
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
            // isLargeRow
            />

            <CatSlider
                props={props}
                title="Nineties"
                fetchUrl={movieDataRequests.fetchNineties}
            // isLargeRow
            />
            <CatSlider
                props={props}
                title="Eighties"
                fetchUrl={movieDataRequests.fetchEighties}
            // isLargeRow
            />
        </>
    );
}
