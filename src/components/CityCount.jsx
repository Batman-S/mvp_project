import React from "react";

export const CityCount = ({ mostVisited }) => {
  return (
    <div className="citycount">
      <h2 className="citycount-text">
        Most Visited Location <strong>{mostVisited}</strong>
      </h2>
      <img
        className="citypicture"
        src={
          mostVisited === "Japan"
            ? "https:d3h1lg3ksw6i6b.cloudfront.net/site/guide_japan.jpg"
            : "https://d3h1lg3ksw6i6b.cloudfront.net/site/guide_thailand.jpg"
        }
      />
    </div>
  );
};

export default CityCount;
