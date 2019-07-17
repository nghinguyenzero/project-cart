import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from "prop-types";

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products> 
                {this.showProducts(products)} 
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

ProductsContainer.propTypes = { //Kiểm tra kiểu các phần tử trong state
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired
}

const mapStateToProps = state => { //là một filter sử dụng để lấy những state trong store -> props mà component yêu cầu
    return {
        products: state.products //reducer/index
    }
}
export default connect(mapStateToProps, null)(ProductsContainer); //The connect() function connects a React component to a Redux store.
