import React, { Component } from 'react';
import Products from "./components/Products";
import Message from "./components/Message";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";




// function App() {
class App extends Component {
    render() {
        return (
            <div>
                {/* <!-- Header --> */}
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        {/* <!-- Products --> */}
                        <Products></Products>
                        {/* <!-- Message --> */}
                        <Message></Message>
                        {/* <!-- Cart --> */}
                        <Cart></Cart>
                    </div>
                </main>
                {/* <!-- Footer --> */}
                <Footer></Footer>
                </div>
        );
    }

}

export default App;
