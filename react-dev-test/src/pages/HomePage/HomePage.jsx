import React from 'react';
import { connect } from 'react-redux';

import { HomePageActionCreator } from './actions';
import MovieCard from './components/MovieCard';
import './HomePage.css';

const HomePage = ({ getList, isLoading, movies }) => {
    React.useEffect(() => {
        getList();
    }, []);

    return (
        <>
            <h2 className='HomePage_Title'>List of Movies</h2>
            <div className='HomePage_MovieList'>
                {isLoading
                    ? 'Loading...'
                    : movies.map((movie) => (
                          <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
                      ))}
            </div>
        </>
    );
};

export default connect(
    (state) => {
        let { HomePageReducer } = state;

        return {
            isLoading: HomePageReducer.isLoading,
            movies: HomePageReducer.movies,
        };
    },
    (dispatch) => ({
        getList: () => dispatch(HomePageActionCreator.GetList()),
    })
)(HomePage);
