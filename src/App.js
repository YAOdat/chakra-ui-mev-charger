import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react'
import { ProductCard } from './components/ProductCard'
import { products } from './components/data/productdata'
import { ProductGrid } from './components/ProductGrid'

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiStep from './components/Multistep';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
          <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/shop" element={<Products />} />
        <Route path="/pick" element={<MultiStep />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Box
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
  <Footer />
    </BrowserRouter>
  );
}

export default App;
