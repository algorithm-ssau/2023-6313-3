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
    Th,
    Td, 
    Card,
    Heading
} from '@chakra-ui/react'
import SimpleImageSlider from "react-simple-image-slider";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import Navbar from '../../components/Navbar'
import { images } from './fakeImages';
import { useState } from 'react';

export default function CarPage() {

  const [fav, setFav] = useState(false)

  return (
    <ChakraProvider resetCSS>
        <Navbar/>
        <Container maxW={900} mt={50}>
        <Card p={10}>
        <Flex>
            <Box>
                <Heading color={'black'} fontSize={30}>
                    Марка и модель
                </Heading>
                <Text color={'black'} fontSize={20}>
                    2000000р
                </Text>
            </Box>
            <Spacer/>
            <Center>
                <Box>
                    {fav ? <MdFavorite size={50} color='red' onClick={() => setFav((prev) => !prev)}/> 
                    : <MdFavoriteBorder size={50} onClick={() => setFav((prev) => !prev)}/>}
                </Box>
            <Button size={'lg'} bgColor={'red'} ml={7}>
                Связаться с нами
            </Button>
            </Center>
            
        </Flex>
        <Flex mt={10}>
            <Card>
            <Table variant={'unstyled'} fontSize={15}>
                <Tr>
                    <Th>Данные</Th>
                    <Th>Значение</Th>
                </Tr> 
                <Tr>
                    <Td>данные</Td>
                    <Td>данные</Td>
                </Tr> 
            </Table>
            </Card>
            <Card p={5} flexGrow={1} ml={5}>
            <Center>
            <SimpleImageSlider
                width={500}
                height={400}
                images={images}
                showBullets={true}
                showNavs={false}
            />
            </Center>
            </Card>
        </Flex>
        </Card>
        </Container>
        
        
    </ChakraProvider>
  )
}
