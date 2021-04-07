import React from 'react';
import { connect } from 'react-redux';

import { HomePageActionCreator } from './actions';
import Infinite from './components/Infinite';
import MovieCard from './components/MovieCard';
import './HomePage.css';

const HomePage = ({ currentPage, getList, isLoading, movies, totalMovies }) => {
    React.useEffect(() => {
        getList(currentPage);
    }, []);

    function handleLoadMore() {
        getList(currentPage + 1);
    }

    return (
        <>
            <h2 className='HomePage_Title'>List of Movies</h2>
            <Infinite
                className='HomePage_MovieList'
                isLastPage={totalMovies === movies.length}
                isLoading={isLoading}
                onLoadMore={handleLoadMore}
            >
                {movies.map((movie, index) => (
                    <MovieCard key={movie.imdbID + index} movie={movie}></MovieCard>
                ))}
            </Infinite>
        </>
    );
};

export default connect(
    (state) => {
        let { HomePageReducer } = state;

        return {
            currentPage: HomePageReducer.currentPage,
            isLoading: HomePageReducer.isLoading,
            movies: HomePageReducer.movies,
            totalMovies: HomePageReducer.totalMovies,
        };
    },
    (dispatch) => ({
        getList: (currentPage) => dispatch(HomePageActionCreator.GetList(currentPage)),
    })
)(HomePage);
