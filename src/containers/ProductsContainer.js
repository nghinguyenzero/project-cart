import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';



class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            // <Products products={products} />
            <Products>
                {this.showProducts(products)} //Truyền vào dạng children
            </Products>
        );
    }
    showProducts(products){
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product}/>
            });
        }
        return result;
    }
}

const mapStateToProps = state => { //là một bộ lọc (filter) sử dụng để lấy (select) những thứ trong store mà component yêu cầu
    return {
        products: state.products //reducer/index
    }
}
export default connect(mapStateToProps, null)(ProductsContainer); //The connect() function connects a React component to a Redux store.
