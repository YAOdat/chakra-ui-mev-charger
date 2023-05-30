import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Img,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ChargerIcon from '../components/images/Icon Images/charger.png';
import AdapterIcon from '../components/images/Icon Images/socket.png';
import Volkswagen from '../components/images/Brands/Volkswagen.png';
import Tesla from '../components/images/Brands/Tesla_logo.png';
import BMW from '../components/images/Brands/BMW.png';
import Mercedes from '../components/images/Brands/Mercedes-Logo.svg.png';
import Nissan from '../components/images/Brands/Nissan_logo.png';
import Hyundai from '../components/images/Brands/Hyundai-Logo.png';
import Kia from '../components/images/Brands/KIA.png';
import Renault from '../components/images/Brands/Renault.png';
import Jaguar from '../components/images/Brands/Jaguar-Logo.png';
import Porsche from '../components/images/Brands/Porsche.png';
import Changan from '../components/images/Brands/Changan-Logo.png';
import Ford from '../components/images/Brands/Ford.png';

const Form1 = ({ onNext }) => {
  const handleClick = () => onNext();

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        What are you looking for?
      </Heading>
      <RadioGroup mb={8} name="Step1" sx={{ mt: 8 }}>
        <Stack spacing={10} direction="row" justify="center">
          <Stack direction="column" align="center">
            <Img
              width="100px"
              src={ChargerIcon}
              alt="Charger Icon"
              value="charger"
              onClick={handleClick}
              _hover={{ transform: 'scale(1.15)' }}
              transition={'0.2s ease-in-out'}
              cursor={'pointer'}
            />
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              EV Charger
            </FormLabel>
          </Stack>

          <Stack direction="column" align="center">
            <Img
              width="100px"
              src={AdapterIcon}
              alt="Charger Icon"
              onClick={handleClick}
              _hover={{ transform: 'scale(1.15)' }}
              transition={'0.2s ease-in-out'}
              cursor={'pointer'}
            />
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              Adapter
            </FormLabel>
          </Stack>
        </Stack>
      </RadioGroup>
    </>
  );
};

const CarModal = ({ isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>What type of Tesla do you have?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Tesla Charging Port Type</Text>
        </ModalBody>
        <ModalFooter>
            <Link to="/type2-charger">
            <Button colorScheme="green" mr={3}>
                GCC Tesla
                <Img width="25px" src={Tesla} alt="Tesla" />
            </Button>
            </Link>
            <Link to="/tesla_charger">
            <Button colorScheme="green" color="white" _hover={{backgroundColor:"green.400"}}>US Tesla       <Img width="25px" src={Tesla} alt="Tesla" />
</Button>
            </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Form2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCarClick = (portType) => {
    if (portType === 'tesla') {
      onOpen();
    }
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Select Your Vehicle
      </Heading>
      <FormControl id="first-name" isRequired>
        <SimpleGrid columns={4} spacing={10}>
          {/* make the car brands as icons when clicking the icon move to the next step */}
          <Link to="/gbt-chargers">
            <Img width="225px" src={Volkswagen} alt="Volkswagen" onClick={() => handleCarClick('gbt')} />
          </Link>
          <Img width="100px" src={Tesla} alt="Tesla" onClick={() => handleCarClick('tesla')} />
          <Img width="75px" src={BMW} alt="BMW" onClick={() => handleCarClick('type2')} />
          <Img width="75px" src={Mercedes} alt="Mercedes" onClick={() => handleCarClick('type2')} />
          <Img width="75px" src={Nissan} alt="Nissan" ml={8} onClick={() => handleCarClick('chademo')} />
          <Img width="100px" src={Hyundai} alt="Hyundai" onClick={() => handleCarClick('chademo')} />
          <Img width="100px" src={Kia} alt="Kia" onClick={() => handleCarClick('chademo')} />
          <Img width="100px" src={Renault} alt="Renault" />
          <Img width="100px" src={Jaguar} alt="Jaguar" ml={6} />
          <Img width="65px" src={Porsche} alt="Porsche" ml={5} />
          <Img width="100px" src={Changan} alt="Changan" onClick={() => handleCarClick('gbt')} />
          <Img width="112px" src={Ford} alt="Ford" mt={4} />
        </SimpleGrid>
      </FormControl>
      <CarModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      {/* Rest of your form code for Form3 */}
    </>
  );
};

export default function Multistep() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const handleNext = () => {
    setStep(step + 1);
    setProgress(progress + 33.33);
  };

  const handleBack = () => {
    setStep(step - 1);
    setProgress(progress - 33.33);
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated />
        {step === 1 && <Form1 onNext={handleNext} />}
        {step === 2 && <Form2 />}
        {step === 3 && <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={handleBack}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={handleNext}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 && (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => alert('You have submitted the form.')}
              >
                Submit
              </Button>
            )}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
