import {
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_FAILURE,
    ADD_MEMBER_START
} from "../actions/smurfActions";

const initialState = {
    member: [],
    error: '',
};

export const smurfReducer = (state = initialState, action) => {
    console.log("action ", action);
    switch (action.type) {
        case ADD_MEMBER_START:
            return {
                ...state,
                error: action.payload
            };
        case ADD_MEMBER_SUCCESS:
            return {
                ...state,
                member: action.payload,
                error: ''
            

        
            };
        case ADD_MEMBER_FAILURE:
            return {
                ...state,
                error: action.payload

            };
        default:
            return state;
    }
};