import React from 'react';

import './MovieCard.css';

const MovieCard = ({ movie }) => {
    let { Poster, Title, Year } = movie;

    return (
        <div className='MovieCard'>
            <img src={Poster} alt={Title} className='MovieCard_Image' />
            <div className='MovieCard_Title'>
                {Title} ({Year})
            </div>
        </div>
    );
};

export default MovieCard;
