import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
} from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import Logo from './images/mevchargerslogo.png';
import ArabicLanguage from './images/Icon Images/arabic-language.png';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation(); 

  const handleLanguageSwitch = () => {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('https://www.', 'https://ar.'); // Replace www with ar in the URL
    window.location.href = newUrl;
    };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 2 }}
          justify={{ base: 'center', md: 'start' }}
          alignItems="center"
        >
          <Link href="/">
            <img src={Logo} alt="MEV Charger" width={80} />
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            href={'https://api.whatsapp.com/send/?phone=971501679410&text=mevcharger.com'}
            bg={'green.400'}
            _hover={{
              bg: 'green.300',
            }}
          >
            <Icon as={BsWhatsapp} w={5} h={5} mr={3} />
            +971 501 679 410
          </Button>

          <Button onClick={toggleColorMode}>
            <MoonIcon />
          </Button>
          <Link as={Button} onClick={handleLanguageSwitch}>
            <Image src={ArabicLanguage} alt="Arabic Language" width={25} />
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, subChildren }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>

      {subChildren && (
        <Stack pl={4} mt={2}>
          {subChildren.map((subChild) => (
            <Link key={subChild.label} py={2} href={subChild.href}>
              {subChild.label}
            </Link>
          ))}
        </Stack>
      )}
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <React.Fragment key={child.label}>
                <Link py={2} href={child.href}>
                  {child.label}
                </Link>
                {child.subChildren &&
                  child.subChildren.map((subChild) => (
                    <Link key={subChild.label} py={2} fontSize={13} href={subChild.href}>
                      {subChild.label}
                    </Link>
                  ))}
              </React.Fragment>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '#',
    children: [
      {
        label: 'Chargers',
        subLabel: 'Find the best EV charger for your vehicle',
        href: '/products/chargers',
      },
      {
        label: 'Adapters',
        subLabel: 'Find the best EV adapter for your charger',
        href: '/products/adapters',
        subChildren: [
          {
            label: 'AC Adapters',
            subLabel: 'Find the best AC adapter for your charger',
            href: '/products/adapters',
          },
          {
            label: 'DC Adapters',
            subLabel: 'Find the best DC adapter for your charger',
            href: '/products/11',
          },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '#',
    children: [
      {
        label: 'Installation',
        subLabel: 'Get your charger installed by our team',
        href: '/services/ev-charger-installation',
      },
      {
        label: 'Emergency Roadside Charging',
        subLabel: 'If your battery died on the road, we can help',
        href: '/services/roadside-charging-service',
      },
    ],
  },
  {
    label: 'Support',
    subLabel: 'Get help with your charger',
    href: '/support',

  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    children: [
      {
        label: 'About Us',
        subLabel: 'Learn more about MEV chargers',
        href: '/about',
      },
      {
        label: 'Find our location',
        subLabel: 'Come visit us at our location',
        href: 'https://goo.gl/maps/W6EiN6uQAGyH4BTj8',
      },
    ],
  },
];
