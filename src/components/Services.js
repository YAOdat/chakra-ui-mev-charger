import React from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Link } from '@chakra-ui/react';
import { FcInTransit } from 'react-icons/fc';
import DeadBattery from '../components/images/Icon Images/battery-level.png';
import Install from '../components/images/Icon Images/repair.png';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Link href="/services/ev-charger-installation">
        <Feature
          icon={<Image src={Install} w={10} h={10} />}
          title={'EV Charger Installation'}
          text={
            'We specialize in providing professional installation services for all types of electric vehicle (EV) chargers. Whether you are a residential customer looking to have a charger installed at your home or a business owner seeking to offer EV charging stations for your customers or employees, our expert team is here to help.'
          }
        
        />
        </Link>
        <Link href="/services/roadside-charging-service">
        <Feature
          icon={<Image src={DeadBattery} w={10} h={10} />}
          title={'Emergency Roadside Charging'}
          text={
            'is a valuable service designed specifically for electric vehicle (EV) owners who find themselves stranded on the road due to a depleted battery. This service offers immediate assistance and ensures that EV owners can quickly get back on their journey without the stress of finding a charging station or arranging towing services.'
          }
        />
        </Link>
        <Link href="/products">
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'EV Products Delivery'}
          text={
            'We deliver high quality ev products to anywhere in the world. This includes the delivery of electric vehicle (EV) chargers, adapters, and other EV accessories. We also offer installation services for all of our products. Our team is dedicated to providing you with the best customer service possible'
          }
        />
        </Link>
      </SimpleGrid>
    </Box>
  );
}
