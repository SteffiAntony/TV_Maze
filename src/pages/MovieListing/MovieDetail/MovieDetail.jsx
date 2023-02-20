import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncShowDetail,
  getSeletedShow,
  removeSelectedShow,
} from ".././../../store/movies/movieSlice";
import Rating from "./../../Rating/Rating";
import logo from "../../../assets/TVMaze-logo.png";
import SearchInput from "./../../SearchInput/SearchInput";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSeletedShow);
  useEffect(() => {
    dispatch(fetchAsyncShowDetail(id));
    return () => {
      dispatch(removeSelectedShow());
    };
  }, [dispatch, id]);
  return (
    <div className="movie-section" id="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div>
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
            <div className="movieDetailList">
              <div className="section-left">
                <div className="movie-poster">
                  <img
                    className="poster"
                    src={data?.image?.original}
                    alt={data?.name}
                  />
                </div>
              </div>
              <div className="section-right">
                <div className="movie-title">{data?.name}</div>
                <div className="movie-rating">
                  <Rating key={data?.id} data={data?.rating?.average} />
                </div>
                <div className="movie-genres">
                  Genres:
                  {data?.genres?.map((item, index) => {
                    var products = "";
                    if (index === 0) {
                      products = item;
                    } else {
                      products = "|" + item;
                    }
                    const commaSeperatedProducts = products;
                    return commaSeperatedProducts;
                  })}
                </div>
                <div className="showSummary">
                  {data?.summary?.replace(/(<([^>]+)>)/gi, "")}
                </div>
                <div className="movie-cast">
                  {data?._embedded?.cast?.map((item, index) => {
                    return (
                      <div className="characterStyle">
                        <img
                          className="character"
                          src={
                            item?.character?.image != null
                              ? item?.character?.image?.original
                              : item?.person?.image?.original
                          }
                          alt={data?.name}
                        />
                        <div>
                          <div className="CharacterIdentity">
                            <strong>{item?.person?.name}</strong>
                          </div>
                          <div className="CharacterIdentity">
                            as {item?.character?.name}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
