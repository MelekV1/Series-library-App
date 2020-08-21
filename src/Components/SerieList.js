import React from 'react';
import SerieCard from './SerieCard/SerieCard';

const SerieList = ({Data, ratingSearch, nameSearch }) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
    {Data
      .filter(
        (el) =>
          el.rating >= ratingSearch &&
          el.title.toLowerCase().includes(nameSearch.toLowerCase().trim())
      )
      .map((el, i) => (
        <SerieCard key={i} serie={el} />
      ))}
    </div>
  );
};

export default SerieList;
