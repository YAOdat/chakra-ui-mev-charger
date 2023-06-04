import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box textAlign="center" py={20} px={10}>
    <Heading
      display="inline-block"
      as="h2"
      size="4xl"
      bgGradient="linear(to-r, green.400, green.600)"
      backgroundClip="text"
      fontSize="4xl">
      404
    </Heading>
    <Text fontSize="24px" mt={6} mb={4}>
      Page Not Found
    </Text>
    <Text color={'gray.500'} fontSize="20px" mb={8}>
      The page you're looking for does not seem to exist
    </Text>
    <Link to="/">
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, green.400, green.500, green.600)"
        color="white"
        variant="solid"
        fontSize="20px">
        Go to Home
      </Button>
    </Link>
  </Box>
  
  );
}