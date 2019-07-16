var inittialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: '',
        description: 'Đây là sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 10,
    },
    {
        id: 2,
        name: 'Note 10',
        image: '',
        description: 'Đây là sản phẩm do SamSung sản xuất',
        price: 700,
        inventory: 5,
    },
    {
        id: 3,
        name: 'Experia XZ',
        image: '',
        description: 'Đây là sản phẩn so Sony sản xuất',
        price: 500,
        inventory: 20,
    }
];

const product = (state = inittialState, action) => {
    switch (action.type) {
        // case value:
        //     break;
        default: return [...state];
            break;
    }
}

export default product;