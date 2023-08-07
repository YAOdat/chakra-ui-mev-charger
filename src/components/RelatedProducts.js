import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../components/data/productdata.js';
import { Box, Heading, Flex, Text, Image } from '@chakra-ui/react';

import {
  Center,
  Stack,
} from '@chakra-ui/react'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
const RelatedProducts = () => {
  // Get the current product's tags from the URL
  const currentProductId = window.location.pathname.split('/')[2];
  // from the id of the current product, get the product object
  const currentProduct = products.find(product => product.id === currentProductId);
  // from the product object, get the tags
  const currentProductTags = currentProduct.tags;

  // Map through all products and return the ones that have the same tags as the current product
  const relatedProducts = products.filter(product => {
    return product.id !== currentProductId && product.tags && product.tags.some(tag => currentProductTags.includes(tag));
  });


  return (
    <Box justifyContent={'center'} >
      <Heading as="h2" size="lg">Related Products:</Heading>
      <Flex flexWrap="wrap" alignContent={'center'} justifyContent={'left'}>
        {relatedProducts.map(product => (
            <Link to={`/products/${product.id}`}>
                  <Center py={12} m={2}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          key={product.id}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${product.imageSource})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={product.imageSource}
            alt={product.name}             
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {product.function}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
{product.name}          </Heading>
          <Stack direction={'row'} align={'center'}>
            {
            product.salePrice ? (
              <>
                <Text fontSize={'xl'} fontWeight={600}>
                  {product.salePrice} AED
                </Text>
                <Text fontSize={'xl'} color={'gray.600'} textDecoration={'line-through'}>
                  {product.price} AED
                </Text>
              </>
            ) : (
              <Text fontSize={'2xl'} fontWeight={600}>
                {product.price} AED
              </Text>
            )
          
            }

          </Stack>
        </Stack>
      </Box>
    </Center>
              
          </Link>

          
        ))}
      </Flex>
    </Box>
  );
};

export default RelatedProducts;
