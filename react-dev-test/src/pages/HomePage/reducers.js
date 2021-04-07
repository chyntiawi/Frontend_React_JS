import { GET_LIST } from './actions';
import { INITIAL_STATE } from './states';

export const HomePageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};
