import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { products } from './data/productdata';
import ProductFilter from './ProductFilter';
import { Helmet } from 'react-helmet';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <Box m={3}>
      <Helmet>
        <title>Find The Perfect EV Charger for Your Electric Car</title>
        <meta name='keywords' content='EV charger, EV chargers, EV Chargers for sale, Car EV charger, car charger, electric car charger, ID6 EV charger, ID4 EV charger, Tesla EV charger.' />
        <meta property="og:title" content="Find The Perfect EV Charger for Your Electric Car"/>
        <meta name="description" content="Find the perfect EV charger for your electric car. We have a wide selection of chargers to choose from, including Tesla, Volkswagen ID4, ID6, Mercedes, and more."/>
      </Helmet>
      <Text>
      Find the perfect EV charger for your Tesla, Volkswagen ID4, ID6, Porsche, Mercedes, BYD or other electric car.  
          </Text>
      <ProductFilter products={products} onFilterChange={handleFilterChange} />
    
    </Box>
  );
};

export default Products;
