import React from 'react';
import { useState } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import { Link, Routes } from 'react-router-dom';
import Reviewlist from './Reviewlist';
import { Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const HomePage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCategories, setShowCategories] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantity, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);


  const categories = [
    { id: 1, name: 'Mobile Phones' },
    { id: 2, name: 'Wireless Neckband' },
    { id: 3, name: 'Bluetooth Speakers' },
    { id: 4, name: 'Car Holder' },
    { id: 5, name: 'Calculator' },
    { id: 6, name: 'Fitnessband' },
    { id: 7, name: 'Bluetooth Headphone' },
  ];

  const items = [
    { id: 1, name: 'Item 1', MRP: 40000, DP: 35000, category: 'Mobile Phones', imageSrc: 'https://i.postimg.cc/DyrdtMjk/61im-Yp-K33q-L-SX679.jpg' },
    { id: 2, name: 'Item 2', MRP: 1000, DP: 500, category: 'Wireless Neckband', imageSrc: 'https://i.postimg.cc/Z5kYyf4R/neckband.jpg' },
    { id: 3, name: 'Item 3', MRP: 5000, DP: 4500, category: 'Bluetooth Speakers', imageSrc: 'https://i.postimg.cc/9FxZ5w5V/speaker1.jpg' },
    { id: 4, name: 'Item 4', MRP: 30000, DP: 25000, category: 'Mobile Phones', imageSrc: 'https://i.postimg.cc/J0kVrLyQ/redmi.png' },
    { id: 5, name: 'Item 5', MRP: 1200, DP: 1000, category: 'Wireless Neckband', imageSrc: 'https://i.postimg.cc/VNvzx2FK/neck2.jpg' },
    { id: 6, name: 'Item 6', MRP: 4000, DP: 3500, category: 'Bluetooth Speakers', imageSrc: 'https://i.postimg.cc/jdm780Y4/speaker2.jpg' },
    { id: 7, name: 'Item 7', MRP: 500, DP: 300, category: 'Car Holder', imageSrc: 'https://i.postimg.cc/2S6VfCnZ/car1.jpg' },
    { id: 8, name: 'Item 8', MRP: 1000, DP: 500, category: 'Calculator', imageSrc: 'https://i.postimg.cc/k5wCMS9M/calc1.jpg' },
    { id: 9, name: 'Item 9', MRP: 3000, DP: 2500, category: 'Fitnessband', imageSrc: 'https://i.postimg.cc/4yRRBQQ5/band1.jpg' },
    { id: 10, name: 'Item 10', MRP: 3000, DP: 2500, category: 'Bluetooth Headphone', imageSrc: 'https://i.postimg.cc/zf9T2yb7/head1.png' },
    { id: 11, name: 'Item 11', MRP: 800, DP: 700, category: 'Car Holder', imageSrc: 'https://i.postimg.cc/0N7vT4XS/car2.jpg' },
    { id: 12, name: 'Item 12', MRP: 1500, DP: 1000, category: 'Calculator', imageSrc: 'https://i.postimg.cc/SxhjJW0c/calc2.jpg' },
    { id: 13, name: 'Item 13', MRP: 2500, DP: 2000, category: 'Fitnessband', imageSrc: 'https://i.postimg.cc/pXqXX3ZM/band2.jpg' },
    { id: 14, name: 'Item 14', MRP: 2500, DP: 2000, category: 'Bluetooth Headphone', imageSrc: 'https://i.postimg.cc/TP9XCD4M/head4.jpg' },

  ];

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory('');
      setIsCategoryClicked(false);
    } else {
      setActiveCategory(category);
      setIsCategoryClicked(true);
    }
  };


  const handleQuantityChange = (itemId, e) => {
    const value = e.target.value;

    setQuantities((prevQuantities) => {
      return {
        ...prevQuantities,
        [itemId]: value,
      };
    });
  };

  const handleSaveButtonClick = (itemId, itemName, quantity, MRP, DP, history) => {

    console.log("in save button", itemId, itemName, quantity, MRP, DP);

    console.log("hddddddddddddddddddddddddddddddddddddddddddg");
    console.log(itemName);
    console.log(quantity);
    console.log("ddddddddddddddddddddddddddddddddddddddddddd");


    const newSelectedItem = { id: itemId, name: itemName, quantity: quantity, MRP: MRP, DP: DP };

    // Check if item with the same ID already exists in selectedItems
    const existingItemIndex = selectedItems.findIndex(item => item.id === itemId);
    if (existingItemIndex !== -1) {
      // If item exists, update the quantity of the existing item
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[existingItemIndex].quantity += quantity;
      setSelectedItems(updatedSelectedItems);
    } else {
      // If item does not exist, add it to selectedItems
      setSelectedItems(prevSelectedItems => [...prevSelectedItems, newSelectedItem]);
    }

    console.log("in new selected items", newSelectedItem);
    const quantities = newSelectedItem.quantity;
    const prodname = newSelectedItem;
    console.log(quantities, prodname);
    navigate(
      '/Reviewlist',
      {
        state: { quantity: quantities, product: prodname }
      });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);

  };
  return (

    <div className="homepage-container">
      <h1 className="heading">Team Spirit</h1>
      <div className="categories-container">
        {isCategoryClicked && (
          <div className="search-box" id='searchbar'>
            <input
              type="text"
              placeholder="Search items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {showCategories ? (
          <div className="category-browse">
            <h2>Browse Categories</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="category"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
                {activeCategory === category.name && (
                  <div onClick={(e) => e.stopPropagation()} className="items-container">

                    {items
                      .filter((item) => item.category === category.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((item) => (
                        <div key={item.id} className="item">
                          <img src={item.imageSrc} alt={item.name} className="item-image" />
                          <span id="h1">{item.name} <br />
                            <span id="h2"><span id='h3'>MRP</span>:{item.MRP}  <span id='h3'>DP</span>:{item.DP}</span>
                          </span>
                          <input
                            type="number"
                            min={1}
                            placeholder=""
                            className="item-quantity"
                            onBlur={() => handleSaveButtonClick(item.id, item.name, quantity, item.MRP, item.DP)}
                            onChange={(e) => handleQuantityChange(item.id, e)}
                          />
                        </div>
                      ))
                    }

                  </div>


                )}

              </div>
            ))}

            {selectedItems.length > 0 && (

              <Link
                className='btn-review-list'
                onClick={() => handleSaveButtonClick(navigate)}
                to="/Reviewlist"
              >
                Go to Reviewlist
              </Link>


            )}

          </>


        )}
        <Routes>
          <Route
            path="/Reviewlist"
            render={<Reviewlist itemName={items} quantity={quantity} />}
          />

        </Routes>

        <footer>
          <div className="App">
            <Navbar />

          </div>
        </footer>
      </div>
    </div>
  );
};


export default HomePage;