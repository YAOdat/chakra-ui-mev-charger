import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react'
import { ProductCard } from './components/ProductCard'
import { products } from './components/data/productdata'
import { ProductGrid } from './components/ProductGrid'

import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
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
    </div>
  );
}

export default App;
