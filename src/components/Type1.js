import React from 'react';
import { Box, Image, Text, Button, Link, Icon, } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';

const GBT = () => {
  const filteredProducts = products.filter((product) => product.portType === 'type1');

  return (
    <Box>
        <Button colorScheme='green' m={2}>
        <Link href="/pick">
            <Icon as={FaBackward} m={1}/>
            </Link>
            </Button>
        
        {filteredProducts.map((product) => (
            <Box display="flex" alignItems="center" key={product.id} mb={5}>
              <Image src={product.imageUrl} alt={product.name} boxSize="300px" objectFit="cover" />
              <Box ml={4}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>AED {product.price}</Text>
                {product.salePrice && (
                  <Text as="s" color="gray.500" ml={2}>
                    AED {product.salePrice}
                  </Text>
                )}
                <Text>{product.description}</Text>
                <Link href="https://wa.me/971501679410">
                  <Button colorScheme="green" width="half">
                    Order on WhatsApp
                  </Button>
                </Link>
              </Box>
            </Box>
        ))}
    </Box>
  );
};

export default GBT;
