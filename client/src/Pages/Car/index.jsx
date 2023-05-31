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
  //const [fav, setFav] = useState(false);
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = () => {
    return windowWidth < 767;
  };

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
              <Flex
                flexDirection={isMobile() ? 'column' : ''}
                flexWrap={isMobile() ? 'wrap' : ''}
                alignItems={isMobile() ? 'center' : ''}
              >
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
                  {/* <Box>
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
                  </Box> */}
                  <Button size={'lg'} bgColor={'red'} ml={7}>
                    Связаться с нами
                  </Button>
                </Center>
              </Flex>
              <Flex flexWrap={'wrap'} mt={10} justifyContent={'space-around'}>
                <CarPageTable carDetails={carDetails} />
                <Center>
                  <Card p={5} ml={isMobile() ? 0 : 5} mt={isMobile() ? 5 : 0}>
                    <Center>
                      <SimpleImageSlider
                        className={styles['slider']}
                        width={isMobile() ? windowWidth - 100 : 700}
                        height={isMobile() ? (windowWidth - 100) / 1.8 : 500}
                        images={[carDetails.imageUrl]}
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

const CarPageTable = ({ carDetails }) => {
  const transformTransmission = (transmission) => {
    switch (transmission) {
      case 'Manual':
        return 'Механика';
      case 'Automatic':
        return 'Автомат';
      case 'Variator':
        return 'Вариатор';
      case 'Robot':
        return 'Робот';
      default:
        return 'Некорректные данные';
    }
  };
  const transformGear = (gear) => {
    switch (gear) {
      case 'Front-wheel drive':
        return 'Передний привод';
      case 'Rear-wheel drive':
        return 'Задний привод';
      case 'Full':
        return 'Полный привод';
      default:
        return 'Некорректные данные';
    }
  };
  return (
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
          <Td>{transformTransmission(carDetails.transmission)}</Td>
        </Tr>
        <Tr>
          <Td>Привод</Td>
          <Td>{transformGear(carDetails.gear)}</Td>
        </Tr>
        <Tr>
          <Td>Руль</Td>
          <Td>{carDetails.leftSteeringWheel ? 'Левый' : 'Правый'}</Td>
        </Tr>
      </Table>
    </Card>
  );
};
