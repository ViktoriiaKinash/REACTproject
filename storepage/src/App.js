import React, { useState } from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom"; 
import NavBar from "./components/NavBar/NavBar"; 
import Campaigns from "./components/Campaigns/Campaigns"; 
import Products from "./components/Products/Products"; 
import CampaignList from './components/Campaigns/CampaignList';
import ProductList from './components/Products/ProductList';

const App = () => { 
const [campaignList, setCampaignList] = useState(CampaignList);  
const [productList, setProductList] = useState(ProductList); 
const [campaignId, setCampaignId] = useState(3);
const [productId, setProductId] = useState(3);
  return ( 
    <BrowserRouter> 
    <NavBar />
     <Routes> 
        <Route path="" element={<Campaigns setCampaignList={setCampaignList} campaignList={campaignList} campaignId={campaignId} setCampaignId = {setCampaignId} />} />   
      </Routes> 
      <Routes> 
        <Route path="campaigns" element={<Campaigns setCampaignList={setCampaignList} campaignList={campaignList} campaignId={campaignId} setCampaignId={setCampaignId} />} />   
      </Routes> 
      <Routes> 
        <Route path = "products" element={<Products productList={productList} setProductList={setProductList} campaignList={campaignList} productId={productId} setProductId={setProductId} />} />   
      </Routes> 
    </BrowserRouter> 
  ); 
} 

export default App;
