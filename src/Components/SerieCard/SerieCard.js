import React from 'react';
import './SerieCard.css';
import Rating from  '../rating'

const SerieCard = ({ serie: { poster, rating, title, date,  Overview } })=> {
  return (
    <div className='container'>

      <div className='serie'>



        <div className='serie-poster'>
          <img src={poster} alt='serie poster' />
        </div>
        <div className='serie-rating'>
          <Rating rating={rating} />
        </div>
        <div className='text-serie-cont'>

          <div className='mr-grid'>
              <h2>{title}</h2>
              <h4>Years : {date}</h4>
          </div>

          <div className='mr-grid summary-row'>
            <h4>Overview :</h4>
            <p>{Overview}</p>
          </div>

          <div className='mr-grid action-row'>
              <div className='watch-btn'>
                <h3>WATCH TRAILER</h3>
              </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SerieCard;
