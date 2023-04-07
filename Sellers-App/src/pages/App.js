import React from 'react';
import Cart from '../components/Cart';
import Home from '../components/Home';
import Dispatch from '../components/Dispatch';
import Notification from '../components/Notification';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Reviewlist from '../components/Reviewlist';

function App() {
  return (
         <BrowserRouter>
         <Routes>
          <Route path='*' element={<Home />} />
           <Route  path='/Cart' element={<Cart />} />
           <Route  path='/Notification' element={<Notification />} />
           <Route  path='/Reviewlist' element={<Reviewlist />} />
           <Route  path='/dispatch' element={<Dispatch />} />
         </Routes>
       </BrowserRouter>      
  );
}

export default App;