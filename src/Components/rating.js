import React from 'react';

const Rating = ({ starIndex, rating }) => {
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= x) {
        starArray.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => starIndex(i)}
          >
            ★
          </span>
        );
      } else {
        starArray.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => starIndex(i)}
          >
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div>{stars(rating)}</div>;
};

Rating.defaultProps = {
  starIndex: () => {},
  rating: 5,
};

export default Rating;
