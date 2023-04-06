import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Reviewlist = () => {
  const { state } = useLocation();

  // Accessing the "ab" and "cd" variables from the state object
  const quantity = state.quantity;
  const items = state.product; 
  console.log("Hello",quantity,items);

  // create state variables and set the initial values as the data passed from Home component
  const [cartItems, setCartItems] = useState( []);
  const [cartQuantities, setCartQuantities] = useState(quantity || {});

  // function to remove an item from cart
  const handleRemoveItem = (itemId) => {
    // create a new array with all items except the one to be removed
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    // create a new object with all quantities except the one to be removed
    const updatedQuantities = { ...cartQuantities };
    delete updatedQuantities[itemId];
    // update the state variables with the new arrays
    setCartItems(updatedItems);
    setCartQuantities(updatedQuantities);
  };


  return (
    <div>
      <div className="container">
        <h1 className="heading">Reviewlist</h1>
        <div className="row">
          <div className="col-md-9 items-container">
            {cartItems.map((item) => (
              <div className="item" key={item.id}>
                <img src={`${item.id}.jpg`} alt={item.name} className="item-image" />
                <h3>{item.name}</h3>
                <div className="item-quantity">{cartQuantities[item.id]}</div>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            ))}
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

export default Reviewlist;
