import React from 'react'
import movieDataRequests from "../../utilities/config";
import Main from "./mainMovies";

export default function HomeCategories() {
    return (
        <>
            <Main
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            />

            <Main
                title="Nineties"
                fetchUrl={movieDataRequests.fetchNineties}
                isLargeRow
            />
             <Main
                title="Eighties"
                fetchUrl={movieDataRequests.fetchEighties}
                isLargeRow
            />
      </>
    )
}
