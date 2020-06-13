import {
    ADD_MEMBER,
    ADD_MEMBER_FAILURE,
    ADD_MEMBER_START
} from "../actions/smurfActions";

const initialState = {
    members: []
};

export const smurfReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_MEMBER:
            const newMember = {
                name: action.payload,
                age: action.payload,
                height: action.payload,
                
            };
            return {
                ...state,
                members: [...state.members, newMember]
            };
        case ADD_MEMBER_START:
            return {
                ...state,
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