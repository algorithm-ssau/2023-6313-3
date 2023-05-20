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
import { useGetCarQuery } from '../../redux/api/carsApi';

export default function CarPage() {
  const [fav, setFav] = useState(false);
  const [isFullImage, setFullImage] = useState(false);
  const [curImage, setCurImage] = useState(0);
  const { id } = useParams();

  const {
    data: carDetails,
    isFetching,
    isLoading,
    error,
  } = useGetCarQuery(id, {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  console.log(carDetails);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    console.log('scroll');
  }, []);

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
            <CarPageTable carDetails={carDetails} />
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

const CarPageTable = ({ carDetails }) => (
  <Card p={3}>
    <Table size={'md'} fontSize={16} variant={'unstyled'}>
      <Tr>
        <Td>Наличие</Td>
        <Td>{carDetails.availability}</Td>
      </Tr>
      <Tr>
        <Td>Поколение</Td>
        <Td>{carDetails.generation}</Td>
      </Tr>
      <Tr>
        <Td>Год выпуска</Td>
        <Td>{carDetails.yearOfIssue}</Td>
      </Tr>
      <Tr>
        <Td>Пробег</Td>
        <Td>{carDetails.mileage}</Td>
      </Tr>
      <Tr>
        <Td>Кузов</Td>
        <Td>{carDetails.body}</Td>
      </Tr>
      <Tr>
        <Td>Цвет</Td>
        <Td>{carDetails.color}</Td>
      </Tr>
      <Tr>
        <Td>Двигатель</Td>
        <Td>{carDetails.engine}</Td>
      </Tr>
      <Tr>
        <Td>Налог</Td>
        <Td>{carDetails.tax}</Td>
      </Tr>
      <Tr>
        <Td>Коробка</Td>
        <Td>{carDetails.transmission}</Td>
      </Tr>
      <Tr>
        <Td>Привод</Td>
        <Td>{carDetails.driveUnit}</Td>
      </Tr>
      <Tr>
        <Td>Руль</Td>
        <Td>{carDetails.steeringWheel}</Td>
      </Tr>
      <Tr>
        <Td>Состояние</Td>
        <Td>{carDetails.healthStatus}</Td>
      </Tr>
    </Table>
  </Card>
);
