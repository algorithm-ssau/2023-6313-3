import {
  Box,
  ChakraProvider,
  Text,
  Flex,
  Container,
  Button,
  Spacer,
  Center,
  Table,
  Tr,
  Td,
  Card,
  Heading,
  Select,
} from '@chakra-ui/react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AdCarPage() {
  return (
    <ChakraProvider resetCSS>
      <Navbar />
      <Container maxW={1320} mt={50}></Container>
      <Center>
        <Heading as='h1' size='xl'>
          Размещение объявления
        </Heading>
      </Center>
      <Center>
        <Box
          p={10}
          marginBottom={5}
          minW={300}
          boxShadow={
            '0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),' +
            '0px 8px 16px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)'
          }
        ></Box>
      </Center>
      <Footer />
    </ChakraProvider>
  );
}
