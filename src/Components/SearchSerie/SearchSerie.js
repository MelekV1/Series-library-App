import React from 'react';
import Rating from '../rating';
import './Search.css';

const Search = ({ setNameSearch, setRatingSearch, ratingSearch }) => {
  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Type movie name to search'
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <Rating
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </div>
    </div>
  );
};

export default Search;
