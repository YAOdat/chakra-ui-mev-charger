import React, { useState } from 'react';
import { Box, Select, List, ListItem, Image, Text, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ProductFilter = ({ products, onFilterChange }) => {
  const [selectedPortType, setSelectedPortType] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handlePortTypeChange = (event) => {
    const { value } = event.target;
    setSelectedPortType(value);

    if (value === '') {
      // If no port type is selected, show all products
      setFilteredProducts(products);
    } else {
      // Filter products based on selected port type
      const filtered = products.filter(
        (product) =>
          product.portType === value ||
          product.portType2 === value ||
          product.portType3 === value
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Box>
      <label htmlFor="portTypeFilter">Filter by Vehicle Region of Manufacturing:</label>
      <Select id="portTypeFilter" value={selectedPortType} onChange={handlePortTypeChange}>
        <option value="">All</option>
        <option value="gbt">Made in China</option>
        <option value="type2">Made in Europe</option>
        <option value="type1">Made in USA (Except Tesla)</option>
        <option value="chademo">Made in East Asia</option>
        <option value="tesla">US Tesla</option>
      </Select>

      <List>
        {filteredProducts.map((product) => (
          <ListItem key={product.id}>
            <Box display="flex" alignItems="center">
              <Link as={RouterLink} to={`/products/${product.id}`}>
                <Image src={product.imageUrl} alt={product.name} boxSize="300px" objectFit="cover" />
              </Link>
              <Box ml={4}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>AED {product.price}</Text>
                {product.salePrice && (
                  <Text as="s" color="gray.500" ml={2}>
                    AED {product.salePrice}
                  </Text>
                )}
                <Text>{product.description}</Text>
                <Link href={`https://wa.me/971501679410?text=Hi,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20for%20AED%20${product.price}`} isExternal>
                  <Button colorScheme="green" width="half">
                    Order on WhatsApp
                  </Button>
                </Link>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductFilter;
