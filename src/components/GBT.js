import React from 'react';
import { Box, Image, Text, Button, Link, Icon, useBreakpointValue, Heading } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const GBT = () => {
  const filteredProducts = products.filter((product) => product.portType === 'gbt' || product.portType2 === 'gbt');
  
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box>
      <Helmet>
        <title> ID4 and ID6 EV Chargers</title>
        <meta name="description" content="Find the best ID4 and ID6 EV chargers in UAE and Dubai" />
        <meta name='keyword' content='ID4 EV chargers' />
        <meta name='keyword' content='ID6 EV chargers' />
        <meta name='keyword' content='ID4 EV charger' />
        <meta name='keyword' content='ID6 EV charger' />
        <meta name='keyword' content='ID4 EV chargers in UAE' />
        <meta name='keyword' content='ID6 EV chargers in UAE' />
        <meta name='keyword' content='ID4 EV chargers in Dubai' />
        <meta name='keyword' content='ID6 EV chargers in Dubai' />
        <meta name='keyword' content='GBT Port Charger' />

      </Helmet>
       <Heading as='h1' size='1xl' noOfLines={1}>
        Find the best VW/Changan charger for your vehicle.
      </Heading>

      <Button colorScheme='green' m={2}>
        <Link href="/pick">
          <Icon as={FaBackward} m={1}/>
        </Link>
      </Button>

      {filteredProducts.map((product) => (
        <Box display="flex" flexDirection={flexDirection} alignItems="center" key={product.id} mb={5}>
          <Link href={`./${product.id}`}> 
          <Image src={product.imageUrl? product.imageUrl : product.imageSource} alt={product.name} boxSize="300px" objectFit="cover" />
          </Link>
          <Box ml={4}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text>AED {product.price}</Text>
            {product.salePrice && (
              <Text as="s" color="gray.500" ml={2}>
                AED {product.salePrice}
              </Text>
            )}
            <Text mb={2}>{product.description}</Text>
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
