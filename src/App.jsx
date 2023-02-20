import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieListing/MovieDetail/MovieDetail";
import MovieListing from "./pages/MovieListing/MovieListing";
import Start from "./pages/Start/Start";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/shows" element={<MovieListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
