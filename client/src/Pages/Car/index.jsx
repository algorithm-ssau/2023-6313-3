import {
<<<<<<< HEAD
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
    Heading
} from '@chakra-ui/react'
import { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import Navbar from '../../components/Navbar'
import { images } from '../../fake-db/fakeImages';
import { car } from '../../fake-db/fakeCarData';
import Footer from '../../components/Footer';


export default function CarPage() {

    const [fav, setFav] = useState(false)

    return (
        <ChakraProvider resetCSS>
            <Navbar />
            <Container maxW={1320} mt={50}>
                <Card p={10}>
                    <Flex>
                        <Box>
                            <Heading color={'black'} fontSize={30}>
                                Porsche Panamera GTS
                            </Heading>
                            <Text color={'black'} fontSize={20}>
                                2 000 000 <small>₽</small>
                            </Text>
                        </Box>
                        <Spacer />
                        <Center>
                            <Box>
                                {fav ? <MdFavorite size={50} color='red' onClick={() => setFav((prev) => !prev)} />
                                    : <MdFavoriteBorder size={50} onClick={() => setFav((prev) => !prev)} />}
                            </Box>
                            <Button size={'lg'} bgColor={'red'} ml={7}>
                                Связаться с нами
                            </Button>
                        </Center>

                    </Flex>
                    <Flex mt={10} justifyContent={'space-around'}>
                        <Card p={3}>
                            <Table size={'md'} fontSize={16} variant={'unstyled'} >
                                <Tr>
                                    <Td>Наличие</Td>
                                    <Td>{car.availability}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Поколение</Td>
                                    <Td>{car.generation}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Год выпуска</Td>
                                    <Td>{car.yearOfIssue}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Пробег</Td>
                                    <Td>{car.mileage}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Кузов</Td>
                                    <Td>{car.body}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Цвет</Td>
                                    <Td>{car.color}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Двигатель</Td>
                                    <Td>{car.engine}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Налог</Td>
                                    <Td>{car.tax}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Коробка</Td>
                                    <Td>{car.transmission}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Привод</Td>
                                    <Td>{car.driveUnit}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Руль</Td>
                                    <Td>{car.steeringWheel}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Состояние</Td>
                                    <Td>{car.healthStatus}</Td>
                                </Tr>
                            </Table>
                        </Card>
                        <Center>
                            <Card p={5} ml={5}>
                                <Center>
                                    <SimpleImageSlider
                                        width={700}
                                        height={500}
                                        images={images}
                                        showBullets={true}
                                        showNavs={false}
                                    />
                                </Center>
                            </Card>
                        </Center>
                    </Flex>
                </Card>
            </Container>

            <Footer />
        </ChakraProvider>
        
    )
}
=======
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
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { images } from '../../fake-db/fakeImages';
import { car } from '../../fake-db/fakeCarData';
import Footer from '../../components/Footer';
import styles from './style.module.css';

export default function CarPage() {
  const [fav, setFav] = useState(false);
  const [isFullImage, setFullImage] = useState(false);
  const [curImage, setCurImage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    console.log('scroll');
  }, []);

  useEffect(() => {
    console.log(`get car details by id: ${id}`);
  }, [id]);

  return (
    <ChakraProvider resetCSS>
      <Navbar />
      <Container maxW={1320} mt={50}>
        <Card p={10}>
          <Flex>
            <Box>
              <Heading color={'black'} fontSize={30}>
                Porsche Panamera GTS
              </Heading>
              <Text color={'black'} fontSize={20}>
                2 000 000 <small>₽</small>
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
            <CarPageTable />
            <Center>
              <Card p={5} ml={5}>
                <Center>
                  <SimpleImageSlider
                    width={700}
                    height={500}
                    images={images}
                    showBullets={true}
                    onClickBullets={(idx) => setCurImage(idx)}
                    onClick={() => setFullImage(!isFullImage)}
                    showNavs={false}
                  />
                  {isFullImage ? (
                    <Image
                      className={styles['enlarged-image']}
                      src={images[curImage].url}
                      onClick={() => setFullImage(!isFullImage)}
                    ></Image>
                  ) : null}
                </Center>
              </Card>
            </Center>
          </Flex>
        </Card>
      </Container>

      <Footer />
    </ChakraProvider>
  );
}

const CarPageTable = () => (
  <Card p={3}>
    <Table size={'md'} fontSize={16} variant={'unstyled'}>
      <Tr>
        <Td>Наличие</Td>
        <Td>{car.availability}</Td>
      </Tr>
      <Tr>
        <Td>Поколение</Td>
        <Td>{car.generation}</Td>
      </Tr>
      <Tr>
        <Td>Год выпуска</Td>
        <Td>{car.yearOfIssue}</Td>
      </Tr>
      <Tr>
        <Td>Пробег</Td>
        <Td>{car.mileage}</Td>
      </Tr>
      <Tr>
        <Td>Кузов</Td>
        <Td>{car.body}</Td>
      </Tr>
      <Tr>
        <Td>Цвет</Td>
        <Td>{car.color}</Td>
      </Tr>
      <Tr>
        <Td>Двигатель</Td>
        <Td>{car.engine}</Td>
      </Tr>
      <Tr>
        <Td>Налог</Td>
        <Td>{car.tax}</Td>
      </Tr>
      <Tr>
        <Td>Коробка</Td>
        <Td>{car.transmission}</Td>
      </Tr>
      <Tr>
        <Td>Привод</Td>
        <Td>{car.driveUnit}</Td>
      </Tr>
      <Tr>
        <Td>Руль</Td>
        <Td>{car.steeringWheel}</Td>
      </Tr>
      <Tr>
        <Td>Состояние</Td>
        <Td>{car.healthStatus}</Td>
      </Tr>
    </Table>
  </Card>
);
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
