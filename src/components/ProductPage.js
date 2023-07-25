import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons'
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { products } from '../components/data/productdata.js';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CarBonnetClosed from './images/Icon Images/car.png';
import CarBonnetOpen from './images/Icon Images/bonnet.png';

export default function Simple() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  let encodedMessage = encodeURIComponent(
    `Hi, I would like to order ${product?.name} for AED ${product?.price}`
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.color?.length > 0 ? product.color[0] : null
  );
  const [selectedPort, setSelectedPort] = useState(
    product?.ports?.length > 0 ? product.ports[0] : null
  );

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handlePortSelection = (port) => {
    setSelectedPort(port);
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  const renderedDescription = product.longDescription
    .split('\n')
    .map((str, index) => (
      <>
        <br />
        <p key={index}>{str}</p>
      </>
    ));

  const metaDescription = `${product?.name} - AED ${product?.price}. ${product?.description}`;

  return (
    <Container maxW={'7xl'}>
      <Helmet>
        <title> {product.name} | MEV Charger </title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={product?.imageUrl} />
        <meta property="og:url" content={`https://mevcharger.com/product/${product.id}`} />
        <meta property="og:type" content="product" />
        <meta property="og:price:amount" content={product.price} />
        <meta property="og:price:currency" content="AED" />
        <meta property="og:availability" content="instock" />
        <meta property="og:brand" content="MEV Charger" />
        <meta property="og:condition" content="new" />
        <meta property="og:retailer_item_id" content={product.id} /> 
        <meta property="product:brand" content="Mega" />
        {product.tags && <meta property="product:category" content={product.tags} />}
        {product.tags && <meta name='keywords' content={product.tags} />}
      </Helmet>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <TransformWrapper>
            <TransformComponent>
              <Link to={`/product/${product.id}`}>
                <img
                  src={
                    selectedColor?.imageUrl ||
                    selectedPort?.image ||
                    product?.imageUrl ||
                    product?.imageSource
                  }
                  alt={product.imageAlt ? product.imageAlt : product.name}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </TransformComponent>
          </TransformWrapper>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              as='h1'
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {product.name}
            </Heading>
            <Text fontWeight={400} fontSize="2xl">
              {product.salePrice ? (
                <Flex>
                  <Text as="s">{`${product.price} AED`}</Text>
                  <Text pr={4}>{`${product.salePrice} AED`}</Text>
                </Flex>
              ) : (
                `${product.price} AED`
              )}
            </Text>
          </Box>
          <Box>
            <Text color={'gray.500'} fontSize={'xl'}>
              {product.description}
            </Text>
          </Box>
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
          <Text color={'gray.500'} fontSize={'xl'} my={4}>
            {renderedDescription}
          </Text>

{product.coverageList && (
  <Menu>
    <MenuButton
      as={Button}
      rightIcon={<ChevronDownIcon />}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      my={3}
      w="100%"
    >
      <Flex align="center">
        Supported Vehicles
        <Image
          src={isMenuOpen ? CarBonnetOpen : CarBonnetClosed}
          alt="car bonnet"
          w="24px"
          ml="8px"
        />
      </Flex>
    </MenuButton>
    <MenuList maxH="200px">
      <input
        type="text"
        placeholder="Search brand..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
      />
      {product.coverageList
        .filter((item) =>
          item.brand.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => (
          <MenuItem key={item.brand} minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={item.image}
              alt={item.brand}
              mr="12px"
            />
            <span>{item.brand}</span>
          </MenuItem>
        ))}
    </MenuList>
  </Menu>
)}
          <img src={product.illustration} alt="product image" />
          <Heading as="h2" size="md" my={2}>
            Specifications:
          </Heading>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Feature</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {product.availablePorts && (
                <Tr>
                  <Td>Available Ports</Td>
                  <Td>{product.availablePorts}</Td>
                </Tr>
              )}
              {product.size && (
                <Tr>
                  <Td>Unit Size</Td>
                  <Td>{product.size}</Td>
                </Tr>
              )}
              {product.weight && (
                <Tr>
                  <Td>Weight</Td>
                  <Td>{product.weight}</Td>
                </Tr>
              )}
              {product.cableLength && (
                <Tr>
                  <Td>Cable Length</Td>
                  <Td>{product.cableLength}</Td>
                </Tr>
              )}
              {product.power && (
                <Tr>
                  <Td>Power</Td>
                  <Td>{product.power}</Td>
                </Tr>
              )}
              {product.current && (
                <Tr>
                  <Td>Maximum Current</Td>
                  <Td>{product.current}</Td>
                </Tr>
              )}
              {product.op && (
                <Tr>
                  <Td>Operating System</Td>
                  <Td>{product.op}</Td>
                </Tr>
              )}
                {product.operatingTemperature && (
                <Tr>
                  <Td>Operating Temperature</Td>
                  <Td>{product.operatingTemperature}</Td>
                </Tr>
              )}
               {product.specialFeature && (
                <Tr>
                  <Td>Special Feature</Td>
                  <Td>{product.specialFeature}</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          {product.illustration2 && (
            <Link href={`/products/${product.id}`}>
              <img src={product.illustration2} alt={product.name} />
            </Link>
          )}
        </Box>
      </SimpleGrid>
    </Container>
  );
}
