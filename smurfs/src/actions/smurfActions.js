import axios from 'axios'

export const ADD_MEMBER_FAILURE = "ADD_MEMBER_FAILURE"
export const ADD_MEMBER_SUCCESS = "ADD_MEMBER"
export const ADD_MEMBER_START = "ADD_MEMBER_START"

export const addMember = (data) => {
    return dispatch => {
        dispatch({ type: ADD_MEMBER_START });
        console.log("data ", data);
        axios
            .post("http://localhost:3333/smurfs", data)
            .then(res => {
                dispatch({ type: ADD_MEMBER_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({
                    type: ADD_MEMBER_FAILURE,
                    payload: err
                });
            });

    };
};

