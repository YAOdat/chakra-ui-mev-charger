import { Box, Text, Heading } from '@chakra-ui/react';

const Emergency = () => {
    return (
        <Box>
        <Heading as='h1' size='1xl' noOfLines={1}>
            Emergency
        </Heading>
        <Text>Call 999 for emergencies.</Text>
        <Text>Call 800 6688 for non-emergencies.</Text>
        <Text>Call +971 505 968 453 for road assistance.</Text>
        </Box>
    );
    }

export default Emergency;