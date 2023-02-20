import React, { useState } from "react";
import "./MovieListing.scss";
import SearchInput from "../SearchInput/SearchInput";
import { useSelector } from "react-redux";
import { getMovieShows } from "../../store/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import logo from "../../assets/TVMaze-logo.png";

const MovieListing = () => {
  const movies = useSelector(getMovieShows);

  let renderMovies = "";
  renderMovies = movies?.map((item, index) => {
    return <MovieCard key={index} data={item} />;
  });
  return (
    <div id="MovieListing">
      <div className="grid-container-element">
        <div className="grid-child-logo">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="grid-child-search">
          <div className="searchbar-Div" id="search">
            <SearchInput />
          </div>
        </div>
      </div>

      <div className="movie-list">
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
