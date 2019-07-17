import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var inittialState = [
    {
        product: {
            id: 1,
            name: 'Iphone X',
            image: 'http://2tmobile.com.vn/image/cache/imgdata/Sanpham/dien_thoai/Apple/iphone-x-fix/apple-iphone-x-256gb-silver-250x250.jpg',
            description: 'Đây là sản phẩm do Apple sản xuất',
            price: 1000,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product:     {
            id: 3,
            name: 'Xperia XZ',
            image: 'https://dienmaycholon.vn/public/picture/product/product11282/big/product_11282_1.png',
            description: 'Đây là sản phẩn so Sony sản xuất',
            price: 500,
            inventory: 20,
            rating: 3
        },
        quantity: 2
    }
];

const cart = (state = inittialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state]; // the spread syntax(cú pháp lây lan) to insert the mid array into the arr array
    }
}

export default cart;