import React from 'react';
import FirstProduct from "../components/Data/FirstProducts";
import MajorSaving from "../components/Data/MajorSaving";
import BestSellers from "../components/Data/BestSellers";
import BestProducts from '../components/Data/BestProducts';
import VRheadset from '../components/Data/VRheadset'; 
import AdvanceVRheadset from '../assets/svgs/Advance VRset.png'; 
import Slider from './home/Slider';
import { Bestproducts, products } from "../components/Data/Data";

function Home() {
  const bestSellersRoutes = [
    { name: 'Electronic', path: '/' },
    { name: 'Baby', path: '/baby' },
    { name: 'Clothings', path: '/clothings' },
    { name: 'Furniture', path: '/furniture' },
    { name: 'Toys&Games', path: '/toys-games' },
    { name: 'Kitchen', path: '/kitchen' },
    { name: 'Beauty', path: '/beauty' }
  ];

  return (
    <div>
      <Slider />
      <FirstProduct />
      <MajorSaving />
    
      <BestProducts products={products} />
      <VRheadset />
     
      <BestProducts products={Bestproducts} />
      <BestProducts products={Bestproducts} />
      <BestProducts products={Bestproducts} />
     
      <VRheadset backgroundImage={AdvanceVRheadset} /> 
    
      <BestProducts products={Bestproducts} />
      <BestSellers title="Best Sellers" routes={bestSellersRoutes} />
     
     
    </div>
  );
}

export default Home;
