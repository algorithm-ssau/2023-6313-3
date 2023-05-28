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
  Image,
  Spinner,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import { useGetCarQuery } from '../../redux/api/carsApi';

export default function CarPage() {
  const [fav, setFav] = useState(false);
  const [isFullImage, setFullImage] = useState(false);
  const [curImage, setCurImage] = useState(0);
  const { id } = useParams();

  const { data: carDetails, isLoading } = useGetCarQuery(id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <ChakraProvider resetCSS>
      <Navbar />
      <Container maxW={1320} mt={50}>
        <Card p={10} boxShadow={'lg'}>
          {isLoading ? (
            <Center m={20}>
              <Spinner
                thickness='4px'
                speed='0.4s'
                emptyColor='gray.200'
                color='red.500'
                size='xl'
              />
            </Center>
          ) : (
            <Box>
              <Flex>
                <Box>
                  <Heading color={'black'} fontSize={30}>
                    {carDetails.name}
                  </Heading>
                  <Text color={'black'} fontSize={20}>
                    {carDetails.price} <small>₽</small>
                  </Text>
                </Box>
                <Spacer />
                <Center>
                  <Box>
                    {fav ? (
                      <MdFavorite
                        size={50}
                        color='red'
                        onClick={() => setFav((prev) => !prev)}
                      />
                    ) : (
                      <MdFavoriteBorder
                        size={50}
                        onClick={() => setFav((prev) => !prev)}
                      />
                    )}
                  </Box>
                  <Button size={'lg'} bgColor={'red'} ml={7}>
                    Связаться с нами
                  </Button>
                </Center>
              </Flex>
              <Flex mt={10} justifyContent={'space-around'}>
                <CarPageTable carDetails={carDetails} />
                <Center>
                  <Card p={5} ml={5}>
                    <Center>
                      <SimpleImageSlider
                        width={700}
                        height={500}
                        images={[carDetails.imageUrl]}
                        showBullets={true}
                        onClickBullets={(idx) => setCurImage(idx)}
                        onClick={() => setFullImage(!isFullImage)}
                        showNavs={false}
                      />
                      {isFullImage ? (
                        <Image
                          className={styles['enlarged-image']}
                          src={carDetails.imageUrl}
                          onClick={() => setFullImage(!isFullImage)}
                        ></Image>
                      ) : null}
                    </Center>
                  </Card>
                </Center>
              </Flex>
            </Box>
          )}
        </Card>
      </Container>

      <Footer />
    </ChakraProvider>
  );
}

const CarPageTable = ({ carDetails }) => (
  <Card p={3}>
    <Center m={5}>
      <Heading as='h2' size='md'>
        Характеристики
      </Heading>
    </Center>
    <Table size={'md'} fontSize={16} variant={'unstyled'}>
      <Tr>
        <Td>Год выпуска</Td>
        <Td>{carDetails.year}</Td>
      </Tr>
      <Tr>
        <Td>Пробег</Td>
        <Td>{carDetails.mileage}</Td>
      </Tr>
      <Tr>
        <Td>Цвет</Td>
        <Td>{carDetails.color}</Td>
      </Tr>
      <Tr>
        <Td>Мощность двигатель</Td>
        <Td>{carDetails.enginePowers}</Td>
      </Tr>
      <Tr>
        <Td>Объем двигателя</Td>
        <Td>{carDetails.engineValue}</Td>
      </Tr>
      <Tr>
        <Td>Коробка</Td>
        <Td>{carDetails.transmission}</Td>
      </Tr>
      <Tr>
        <Td>Привод</Td>
        <Td>{carDetails.gear}</Td>
      </Tr>
      <Tr>
        <Td>Руль</Td>
        <Td>{carDetails.leftSteeringWheel ? 'Левый' : 'Правый'}</Td>
      </Tr>
    </Table>
  </Card>
);
