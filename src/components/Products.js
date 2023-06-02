import React, { useState } from 'react';
import { Box, Badge, Image, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { products } from './data/productdata';
import ProductFilter from './ProductFilter';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <Box>
      <ProductFilter products={products} onFilterChange={handleFilterChange} />
      <Stack spacing={4}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="md" overflow="hidden">
            <Link to={`/products/${product.id}`}>
              <Image src={product.imageUrl} alt={product.name} />
              {product.flag && (
                <Badge
                  position="absolute"
                  top="0"
                  right="0"
                  mt={2}
                  mr={2}
                  variant="solid"
                  colorScheme={product.flag === 'new' ? 'green' : 'red'}
                >
                  {product.flag === 'new' ? 'New' : 'On Sale'}
                </Badge>
              )}
              <Box p={4}>
                <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
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
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Products;
