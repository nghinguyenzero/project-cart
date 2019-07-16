var inittialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'http://2tmobile.com.vn/image/cache/imgdata/Sanpham/dien_thoai/Apple/iphone-x-fix/apple-iphone-x-256gb-silver-250x250.jpg',
        description: 'Đây là sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Note 8',
        image: 'https://img.sam.vn/public/upload/thumbnail/250x250/dien-thoai-samsung-galaxy-note-8-hang-chinh-hang1527734658804.jpeg',
        description: 'Đây là sản phẩm do SamSung sản xuất',
        price: 700,
        inventory: 5,
        rating: 5
    },
    {
        id: 3,
        name: 'Xperia XZ',
        image: 'https://dienmaycholon.vn/public/picture/product/product11282/big/product_11282_1.png',
        description: 'Đây là sản phẩn so Sony sản xuất',
        price: 500,
        inventory: 20,
        rating: 3
    }
];

const products = (state = inittialState, action) => {
    switch (action.type) {
        // case value:
        //     break;
        default: return [...state];
            break;
    }
}

export default products;