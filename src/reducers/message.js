import * as Message from './../constants/Message';

var inittialState = Message.MSG_WELCOME;

const message = (state = inittialState, action) => {

    switch (action.type) {
        default: return state; // the spread syntax(cú pháp lây lan) to insert the mid array into the arr array
    }
}

const findProductInCart = (cart, product) => {
    var index = -1;
    var n = cart.length;
    if (n > 0) {
        for (let i = 0; i < n; i++){
            if(cart[i].product.id === product.id) {
index = i;
break;
            }
        }
    }
    return index;
}

export default message;