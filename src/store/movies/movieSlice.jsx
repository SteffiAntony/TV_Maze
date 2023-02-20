import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../services/api";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movieText) => {
    const response = await movieApi.get(`/search/shows?q=${movieText}`);
    return response.data;
  }
);

export const fetchAsyncShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi.get(`/shows/${id}?embed=cast`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  selectedShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedShow: (state) => {
      state.selectedShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectedShow: payload };
    },
  },
});

export const { removeSelectedShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSeletedShow = (state) => state.movies.selectedShow;
export const getMovieShows = (state) =>
  state.movies.movies.map((cinema) => cinema.show);
export default movieSlice.reducer;
