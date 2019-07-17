import * as Types from './../constants/ActionType';

import * as Message from './../constants/Message';

var inittialState = Message.MSG_WELCOME;

const message = (state = inittialState, action) => {

    switch (action.type) {
        case Types.CHANGE_MESSAGE :
            return action.message;

        default: return state; // the spread syntax(cú pháp lây lan) to insert the mid array into the arr array
    }
}



export default message;