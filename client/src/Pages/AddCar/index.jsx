import {
  Box,
  ChakraProvider,
  Text,
  Flex,
  Container,
  Spacer,
  Center,
  Table,
  Tr,
  Td,
  Card,
  Heading,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAddCarMutation } from '../../redux/api/carsApi.js';

export default function AdCarPage() {
  const toast = useToast();

  const [addCar] = useAddCarMutation();

  const handleSubmit = async (values) => {
    await addCar(values)
      .unwrap()
      .then((response) => {
        console.log(response);
        toast({
          title: 'Success',
          description: 'Автомобиль успешно добавлен',
          status: 'success',
          duration: 5000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: 'Error',
          description: error.data.detail,
          status: 'error',
          duration: 5000,
        });
      });
  };

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
        <AddCarPage handleSubmit={handleSubmit} />
      </Center>
      <Footer />
    </ChakraProvider>
  );
}

const AddCarPage = ({ handleSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    imageUrl: '',
    year: '',
    mileage: '',
    color: '',
    engineValue: '',
    enginePowers: '',
    leftSteeringWheel: false,
    transmission: '',
    gear: '',
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    if (name === 'leftSteeringWheel') {
      const { checked } = event.target;
      setFormValues({ ...formValues, [name]: checked });
      return;
    }

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className='container mt-5'>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formValues);
          setFormValues({
            name: '',
            price: '',
            imageUrl: '',
            year: '',
            mileage: '',
            color: '',
            engineValue: '',
            enginePowers: '',
            leftSteeringWheel: false,
            transmission: '',
            gear: '',
          });
        }}
      >
        <VStack
          spacing={6}
          align='stretch'
          maxW='800px'
          m='auto'
          fontSize='20px'
        >
          <Form.Group controlId='makeModel'>
            <Form.Label>Марка и модель</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={formValues.makeModel}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='price'>
            <Form.Label>Цена (₽)</Form.Label>
            <Form.Control
              type='number'
              name='price'
              value={formValues.price}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='imageUrl'>
            <Form.Label>Фото (ссылка)</Form.Label>
            <Form.Control
              type='text'
              name='imageUrl'
              value={formValues.imageUrl}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='year'>
            <Form.Label>Год</Form.Label>
            <Form.Control
              type='text'
              name='year'
              value={formValues.year}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='mileage'>
            <Form.Label>Пробег (км)</Form.Label>
            <Form.Control
              type='number'
              name='mileage'
              value={formValues.mileage}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='color'>
            <Form.Label>Цвет</Form.Label>
            <Form.Control
              type='text'
              name='color'
              value={formValues.color}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>
          <Form.Group controlId='engineValue'>
            <Form.Label>Объём двигателя (см³)</Form.Label>
            <Form.Control
              type='number'
              name='engineValue'
              value={formValues.engineValue}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='enginePowers'>
            <Form.Label>Мощность (л.с.)</Form.Label>
            <Form.Control
              type='number'
              name='enginePowers'
              value={formValues.enginePowers}
              onChange={handleSelectChange}
              required
            />
          </Form.Group>

          {/* исправить */}
          <Form.Group controlId='leftSteeringWheel'>
            <Form.Check
              type='checkbox'
              name='leftSteeringWheel'
              label='Левое рулевое колесо'
              onChange={handleSelectChange}
            />
          </Form.Group>

          <Form.Group controlId='transmission'>
            <Form.Label>Коробка передач</Form.Label>
            <Form.Control
              as='select'
              name='transmission'
              value={formValues.transmission}
              onChange={handleSelectChange}
              required
            >
              <option value=''>Выбрать</option>
              <option value='Manual'>Механика</option>
              <option value='Automatic'>Автомат</option>
              <option value='Variator'>Вариатор</option>
              <option value='Robot'>Робот</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='gear'>
            <Form.Label>Привод</Form.Label>
            <Form.Control
              as='select'
              name='gear'
              value={formValues.drive}
              onChange={handleSelectChange}
              required
            >
              <option value=''>Выбрать</option>
              <option value='Front-wheel drive'>Передний привод</option>
              <option value='Rear-wheel drive'>Задний привод</option>
              <option value='Full'>Полный привод</option>
            </Form.Control>
          </Form.Group>
        </VStack>

        <Center mt={30}>
          <Button
            variant='primary'
            type='submit'
            className='btn btn-primary btn-lg'
          >
            Опубликовать
          </Button>
        </Center>
      </Form>
    </div>
  );
};
