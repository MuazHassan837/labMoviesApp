import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies, getUpComingMovies } from "../api/tmdb-api";

const UpcomingPage = (props) => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getUpComingMovies().then(comingMovies => {
            setMovies(comingMovies)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); 

    return (
        <PageTemplate 
        title= 'Upcoming Movies'
        movies={movies}
        />
    )
};
export default UpcomingPage