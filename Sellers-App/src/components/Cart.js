import React from 'react';
import Navbar from './Navbar';
import './Cart.css';

function Cart() {
  return (
    <div >
      <div className="container">
        <h1 className="heading">Your Cart</h1>
        <div className="row">
          <div className="col-md-9 items-container">
            <div className="item">
              <img src="item1.jpg" alt="Item 1" className="item-image" />
              <h3>Item 1</h3>
              <div className="item-quantity">1</div>
              
            </div>
            <div className="item">
              <img src="item2.jpg" alt="Item 2" className="item-image" />
              <h3>Item 2</h3>
              <div className="item-quantity">2</div>

            </div>
            <div className="item">
              <img src="item3.jpg" alt="Item 3" className="item-image" />
              <h3>Item 3</h3>
              <div className="item-quantity">1</div>

            </div>
            <div className="item">
              <img src="item3.jpg" alt="Item 3" className="item-image" />
              <h3>Item 4</h3>
              <div className="item-quantity">1</div>
              
            </div>
            <div className="item">
              <img src="item3.jpg" alt="Item 3" className="item-image" />
              <h3>Item 5</h3>
              <div className="item-quantity">1</div>

            </div>
            
           
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <Navbar />
        </div>
      </footer>
    </div>
  );
}

export default Cart;