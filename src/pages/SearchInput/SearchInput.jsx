import React, { useEffect, useRef } from "react";
import "./SearchInput.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../store/movies/movieSlice";

const SearchInput = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);

  const handleClick = () => {
    if (inputRef.current.value !== "") {
      dispatch(fetchAsyncMovies(inputRef.current.value));
      navigate("/shows");
    }
  };

  return (
    <div className="searchInput" id="searchMovieInput">
      <input
        type="text"
        id="searchMovieName"
        placeholder="Search for TV shows"
        name="search"
        ref={inputRef}
      />
      <button onClick={handleClick} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
