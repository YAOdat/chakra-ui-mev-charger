import React, { useState } from 'react';
import { Box, Select, List, ListItem, Image, Text } from '@chakra-ui/react';

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
      const filtered = products.filter((product) => product.portType === value);
      setFilteredProducts(filtered);
    }
  };

  return (
    <Box>
      <label htmlFor="portTypeFilter">Filter by Port Type:</label>
      <Select id="portTypeFilter" value={selectedPortType} onChange={handlePortTypeChange}>
        <option value="">All</option>
        <option value="gbt">GBT</option>
        <option value="type2">Type 2</option>
        <option value="type1">Type 1</option>
        <option value="tesla">Tesla</option>
      </Select>

      <List>
        {filteredProducts.map((product) => (
          <ListItem key={product.id}>
            <Box display="flex" alignItems="center">
              <Image src={product.imageUrl} alt={product.name} boxSize="100px" objectFit="cover" />
              <Box ml={4}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>{product.currency} {product.price}</Text>
                {product.salePrice && (
                  <Text as="s" color="gray.500" ml={2}>
                    {product.currency} {product.salePrice}
                  </Text>
                )}
                <Text>{product.description}</Text>
                <Text>Rating: {product.rating}</Text>
                <Text>Reviews: {product.ratingCount}</Text>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductFilter;
