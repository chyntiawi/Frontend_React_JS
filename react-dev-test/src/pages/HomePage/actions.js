import axios from 'axios';

// ACTION TYPES

export const GET_LIST = 'GET_LIST';

// ACTION CREATORS

const GetListAction = (movies) => ({
    type: GET_LIST,
    payload: movies,
});

export class HomePageActionCreator {
    static GetList() {
        return (dispatch) => {
            axios
                .get('http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=2')
                .then((response) => {
                    if (response.status === 200) {
                        let { Search } = response.data;
                        console.log(Search);
                        dispatch(GetListAction(Search));
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
    }
}
