import React, { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { products } from '../components/data/productdata.js';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function Simple() {
  const { id } = useParams();
  console.log(id);
  
  // Find the product in the data that matches the id from the URL
  const product = products.find((product) => product.id === id);
  console.log(product);
  let encodedMessage = encodeURIComponent(
    `Hi, I would like to order ${product?.name} for AED ${product?.price}`
  );

  // Define state for selected color and port
  const [selectedColor, setSelectedColor] = useState(
    product?.color?.length > 0 ? product.color[0] : null
  ); // Initialize with the first color option if available
  const [selectedPort, setSelectedPort] = useState(
    product?.ports?.length > 0 ? product.ports[0] : null
  ); // Initialize with the first port option if available

  // Function to handle color selection
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  // Function to handle port selection
  const handlePortSelection = (port) => {
    setSelectedPort(port);
    console.log (selectedPort);
  };

  // Render only if the product is found
  if (!product) {
    return <div>Product not found.</div>;
  }
  console.log (selectedPort);

  // Split the long description by line breaks and render each line as a paragraph
  const renderedDescription = product.longDescription
    .split('\n')
    .map((str, index) => (
      <>
        <br />
        <p key={index}>{str}</p>
      </>
    ));

  return (
    <Container maxW={'7xl'}>
      {/* add a meta description for the product page */}
        
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <TransformWrapper>
            <TransformComponent>
              <img
                src={
                  selectedColor?.imageUrl ||
                  selectedPort?.image ||
                  product?.imageUrl
                } // Use selected color's or port's imageUrl, or product's imageUrl if there are no color or port options
                alt="product image"
                style={{ width: '100%', height: 'auto' }}
              />
            </TransformComponent>
          </TransformWrapper>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {product.name}
            </Heading>
            <Text fontWeight={400} fontSize={'2xl'}>
              {`AED ${product.price} `}
            </Text>
          </Box>
          <Box>
            <Text color={'gray.500'} fontSize={'xl'}>
              {product.description}
            </Text>
          </Box>
          {/* Render color selection if there are colors in the data */}
          {product.color?.length > 0 && (
            <Box>
              <Stack spacing={3} direction="row" align="center">
                {product.color.map((color) => (
                  <Button
                    key={color.name}
                    rounded={'none'}
                    w={'full'}
                    mt={0}
                    size={'lg'}
                    py={'6'}
                    bg={color === selectedColor ? 'green.500' : 'gray.200'}
                    color={color === selectedColor ? 'white' : 'gray.500'}
                    textTransform={'uppercase'}
                    _hover={{
                      transform: 'translateY(2px)',
                      boxShadow: 'lg',
                    }}
                    onClick={() => handleColorSelection(color)}
                  >
                    {color.name}
                  </Button>
                ))}
              </Stack>
            </Box>
          )}
          {/* Render port selection if there are ports in the data */}
          {product.ports?.length > 0 && (
            <Box>
              <Stack spacing={3} direction="row" align="center">
                {product.ports.map((port) => (
                  <Button
                    key={port.name}
                    rounded={'none'}
                    w={'full'}
                    mt={0}
                    size={'lg'}
                    py={'6'}
                    bg={port === selectedPort ? 'green.500' : 'gray.200'}
                    color={port === selectedPort ? 'white' : 'gray.500'}
                    textTransform={'uppercase'}
                    _hover={{
                      transform: 'translateY(2px)',
                      boxShadow: 'lg',
                    }}
                    onClick={() => handlePortSelection(port)}
                  >
                    {port.type}
                  </Button>
                ))}
              </Stack>
            </Box>
          )}

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>1-2 business days delivery</Text>
          </Stack>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={'green.500'}
            color={'white'}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={() => {
              window.open(
                `https://wa.me/971501679410?text=${encodedMessage}`,
                '_blank'
              );
            }}
          >
            Order Now
          </Button>
        </Stack>
        <Box>
          <Text color={'gray.500'} fontSize={'xl'} mt={8}>
            {renderedDescription}
          </Text>
          <img src={product.illustration} alt="product image" />
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <br></br>
              <Heading as='h2' size='md'> Specifications: </Heading>
              <Tr>
                <Th>Feature</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Available Ports</Td>
                <Td>{product.availablePorts}</Td>
              </Tr>
              <Tr>
                <Td>Unit Size</Td>
                <Td>{product.size}</Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td>{product.weight}</Td>
              </Tr>
              <Tr>
                <Td>Cable Length</Td>
                <Td>{product.cableLength}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <img src={product.illustration2} alt="product image" />
      </SimpleGrid>
    </Container>
  );
}
