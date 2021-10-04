import React from 'react'
import movieDataRequests from "../../utilities/config";
import Main from "./mainMovies";

export default function HomeCategories(props) {
    return (
        <>
            <Main
                props={props}
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            />

            <Main
                title="Nineties"
                fetchUrl={movieDataRequests.fetchNineties}
                isLargeRow
                props={props}
            />
             <Main
                title="Eighties"
                fetchUrl={movieDataRequests.fetchEighties}
                isLargeRow
                props={props}
            />
      </>
    )
}
