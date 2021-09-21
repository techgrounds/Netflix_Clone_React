import React from 'react'
import movieDataRequests from "../../utilities/config";
import Main from "./mainMovies";

export default function FilmsCategories() {
    return (
        <>
            <Main
                title="Comedy"
                fetchUrl={movieDataRequests.fetchComedy}
                isLargeRow
            />

            <Main
                title="Action"
                fetchUrl={movieDataRequests.fetchAction}
                isLargeRow
            />
             <Main
                title="Thriller"
                fetchUrl={movieDataRequests.fetchThriller}
                isLargeRow
            />
             <Main
                title="Family"
                fetchUrl={movieDataRequests.fetchFamily}
                isLargeRow
            />
             <Main
                title="Fantasy  "
                fetchUrl={movieDataRequests.fetchFantasy}
                isLargeRow
            />
             <Main
                title="Crime"
                fetchUrl={movieDataRequests.fetchCrime}
                isLargeRow
            />
               <Main
                title="Adventure"
                fetchUrl={movieDataRequests.fetchAdventure}
                isLargeRow
            />
      </>
    )
}
