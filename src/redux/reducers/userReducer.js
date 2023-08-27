const { default: actionTypes } = require("../actions/actionTypes");

const initialState = {
    user: {
        name: '',
        lastname: '',
        phone: '',
        email: ''
    }
};

const userReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case actionTypes.CHANGE_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;