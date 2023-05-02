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
import { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import Navbar from '../../components/Navbar'
import { images } from '../../fake-db/fakeImages';
import { car } from '../../fake-db/fakeCarData';


export default function CarPage() {

    const [fav, setFav] = useState(false)

    return (
        <ChakraProvider resetCSS>
            <Navbar />
            <Container maxW={900} mt={50}>
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
                    <Flex mt={10}>
                        <Card p={3}>
                            <Table size={'sm'} variant={'unstyled'} fontSize={15}>
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
