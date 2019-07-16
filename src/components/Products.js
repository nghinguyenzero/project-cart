import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';


class Products extends Component {
    render() {
        var { products } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* <!-- Product --> */}
                    {this.showProducts(products)}
                </div>
            </section>

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
export default connect(mapStateToProps, null)(Products); //The connect() function connects a React component to a Redux store.
