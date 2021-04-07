import axios from 'axios';

// ACTION TYPES

export const GET_LIST = 'GET_LIST';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL = 'SET_TOTAL';

// ACTION CREATORS

const GetListAction = (movies) => ({
    type: GET_LIST,
    payload: movies,
});

const SetCurrentPageAction = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
});

const SetTotalAction = (totalMovies) => ({
    type: SET_TOTAL,
    payload: totalMovies,
});

export class HomePageActionCreator {
    static GetList(page) {
        return (dispatch) => {
            axios
                .get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=${page}`)
                .then((response) => {
                    if (response.status === 200) {
                        let { Search, totalResults } = response.data;

                        dispatch(GetListAction(Search));
                        dispatch(SetTotalAction(totalResults));
                        dispatch(SetCurrentPageAction(page));
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
    }
}
