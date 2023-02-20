import React, { useMemo } from "react";
import "./Rating.scss";

const Rating = (props) => {
  const { data } = props;
  const rateRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <span>
      {rateRange.map((value, index) => {
        if (value < data) {
          return <div className="clip-star" key={index}></div>;
        } else {
          return <div className="no-star" key={index}></div>;
        }
      })}
    </span>
  );
};
export default Rating;
