import React, { Component } from 'react';
import Message from "./components/Message";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';


class App extends Component {
    render() {
        return (
            <div>
                {/* <!-- Header --> */}
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        {/* <!-- Products --> */}
                        <ProductsContainer />
                        {/* <!-- Message --> */}
                        <Message></Message>
                        {/* <!-- Cart --> */}
                        <CartContainer />
                    </div>
                </main>
                {/* <!-- Footer --> */}
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
