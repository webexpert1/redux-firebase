import { GET_USERS, REGISTER_USER } from '../actions/types';

const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            var result = {
                users: [...action.payload]
            };
            return result;
        case REGISTER_USER:
            var result1 = {
                users: [...state, action.payload]
            };
            return result1;
        default:
            return state;
    }
}

export default userReducer;