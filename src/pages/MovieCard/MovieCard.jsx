import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data?.id}`}>
        <div className="card-top">
          <img src={data?.image?.original} alt={data?.name} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data?.name}</h4>
            <Rating data={data?.rating?.average} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
