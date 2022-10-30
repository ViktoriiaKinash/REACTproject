import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import NavBar from "./components/NavBar/NavBar"; 
import Campaigns from "./components/Campaigns/Campaigns"; 
import Products from "./components/Products/Products"; 

 
const App = () => { 
  return ( 
    <BrowserRouter> 
    <NavBar />
      <Routes> 
        <Route path="campaigns" element={<Campaigns />} />   
      </Routes> 
      <Routes> 
        <Route path = "products" element={<Products />} />   
      </Routes> 
    </BrowserRouter> 
  ); 
} 

export default App;
