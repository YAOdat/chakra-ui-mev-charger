import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Img,
  RadioGroup,
  Stack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

import UAE from '../components/images/Icon Images/united-arab-emirates.png';
import Earth from '../components/images/Icon Images/earth.png';


const NotAvailableAlert = () => {
  return (
    <Alert status="warning">
      <AlertIcon />
      We are currently out of stock for Chademo chargers and adapters. Please check back later.
    </Alert>
  );
};

const Form1 = ({ onNext }) => {
    const handleClick = () => {
      const isUAE = window.confirm("We only operate inside the UAE. Please, press OK if you are in the UAE, otherwise try again later");
      if (isUAE) {
        onNext();
      }
    };
  
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Are you in the UAE?
        </Heading>
        <RadioGroup mb={8} name="Step1" sx={{ mt: 8 }}>
          <Stack spacing={10} direction="row" justify="center">
            <Stack direction="column" align="center">
              <Img
                width="100px"
                src={UAE}
                alt="Charger Icon"
                value="charger"
                onClick={handleClick}
                _hover={{ transform: 'scale(1.15)' }}
                transition={'0.2s ease-in-out'}
                cursor={'pointer'}
              />
              <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                Yes.
              </FormLabel>
            </Stack>
  
            <Stack direction="column" align="center">
              <Img
                width="90px"
                src={Earth}
                alt="Charger Icon"
                onClick={handleClick}
                _hover={{ transform: 'scale(1.15)' }}
                transition={'0.2s ease-in-out'}
                cursor={'pointer'}
              />
              <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                No.
              </FormLabel>
            </Stack>
          </Stack>
        </RadioGroup>
      </>
    );
  };
  

const Form2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNotFoundAlert, setShowNotFoundAlert] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const sendLocationOnWhatsApp = () => {
    if (!userLocation) {
      console.error('Location is not available.');
      return;
    }

    const { latitude, longitude } = userLocation;
    const message = `Hey, here's my location: https://www.google.com/maps?q=${latitude},${longitude}`;
    const whatsappLink = `https://wa.me/+971505968453?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, '_blank');
  };

  const handleSendLocation = () => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      return;
    }

    getLocation();
    onOpen();
    
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Send us your location
      </Heading>
      <Button
        leftIcon={<FaWhatsapp />}
        colorScheme="green"
        onClick={sendLocationOnWhatsApp}
      >
        Send Location on WhatsApp
      </Button>
      {showNotFoundAlert && <NotAvailableAlert />}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Location Sent</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Your location has been sent on WhatsApp.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Ask an expert
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
        <Progress colorScheme="green" hasStripe value={progress} mb="5%" mx="5%" isAnimated />
        {step === 1 && <Form1 onNext={handleNext} />}
        {step === 2 && <Form2 />}
        {step === 3 && <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={handleBack}
                isDisabled={step === 1}
                colorScheme="green"
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
                colorScheme="green"
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
                onClick={() => alert('I will message you later.')}
              >
                Help pls
              </Button>
            )}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
