import { GET_LIST, SET_CURRENT_PAGE, SET_TOTAL } from './actions';
import { INITIAL_STATE } from './states';

export const HomePageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                movies: [...state.movies, ...action.payload],
                isLoading: false,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_TOTAL:
            return {
                ...state,
                totalMovies: action.payload,
            };
        default:
            return state;
    }
};
