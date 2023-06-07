import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import { blogPosts } from './data/productdata';
import { Link } from 'react-router-dom';


const useColorModeValueWrapper = (lightValue, darkValue) => {
  const colorMode = useColorModeValue('light', 'dark');
  return colorMode === 'light' ? lightValue : darkValue;
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://professional-electrician.com/wp-content/uploads/2019/11/AdobeStock_245393308.jpeg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const colorModeValue = useColorModeValueWrapper('gray.700', 'gray.200');

  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Learn More About EV Chargers</Heading>
      {blogPosts.map((post) => (
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
          key={post.id}

        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
            >
              <Link to={`/blog/${post.id}`} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={post.imageUrl}
                  alt="some good alt text"
                  objectFit="contain"
                  _hover={{
                    transform: 'scale(1.04)',
                  }}
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={(
                  'radial(green.600 1px, transparent 1px)',
                  'radial(green.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}
          >
            <BlogTags tags={['EV chargers', 'Electric car']} />
            <Heading marginTop="1">
              <Link to={`/blog/${post.id}`} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {post.title}
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={('black.700', 'black.200')}
              fontSize="lg"
            >
              {post.description.length > 165
                ? `${post.description.slice(0, 165)}...`
                : post.description}
            </Text>
            <BlogAuthor name="MEV Charger" date={new Date(post.date)} />
          </Box>
        </Box>
      ))}
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://professional-electrician.com/wp-content/uploads/2019/11/AdobeStock_245393308.jpeg'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <BlogTags tags={['EV Chargers', 'Dubai']} marginTop="3" />
            </Link>
            <Heading fontSize="xl" marginTop="2">
              <Link to={'./the-best-places-to-buy-ev-chargers-in-dubai'} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                The Best Places to Buy EV Chargers in Dubai              </Link>
            </Heading>

            <Text as="p" fontSize="md" marginTop="2">
              As the demand for electric vehicles (EVs) continues to rise, the need for reliable and efficient EV chargers is on the rise as well. Dubai, known for its commitment to sustainable living, has embraced the electric vehicle revolution with open arms. If you're an EV owner or planning to become one, it's crucial to have access to high-quality EV chargers. In this blog post, we will explore the two best places to buy EV chargers in Dubai
            </Text>
            <BlogAuthor
              name="MEV Charger"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">MEV Charger Blog</Heading>
        <Text as="p" fontSize="lg">
          Welcome to the MEV Chargers Blog, your go-to destination for all things related to Electric Vehicle (EV) chargers. Whether you're a proud EV owner, an industry professional, or simply interested in the future of sustainable transportation, this blog is designed to provide you with valuable insights, updates, and expert advice on EV charging technologies, trends, and best practices. Join us as we delve into the world of EV chargers and explore the latest advancements shaping the electric mobility landscape.


        </Text>
        <Text as="p" fontSize="lg">
          MEV Chargers Blog is your one-stop destination for everything you need to know about EV chargers. Whether you're seeking industry insights, practical advice, or detailed product information, we've got you covered. Join our growing community of EV enthusiasts and stay informed about the latest advancements in electric vehicle charging. Embrace the green revolution with MEV Chargers Blog and be a part of the sustainable future of transportation.





        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
