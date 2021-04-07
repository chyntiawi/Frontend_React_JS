import React from 'react';
import { connect } from 'react-redux';

import { HomePageActionCreator } from './actions';

const HomePage = ({ getList, isLoading, movies }) => {
    React.useEffect(() => {
        getList();
    }, []);

    return (
        <>
            <div>List of Movies</div>
            <div>{isLoading ? 'Loading...' : movies.map((movie) => <div>{movie.Poster}</div>)}</div>
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
