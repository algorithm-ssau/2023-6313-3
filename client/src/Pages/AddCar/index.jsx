import {
  ChakraProvider,
  Container,
  Center,
  Heading,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAddCarMutation } from '../../redux/api/carsApi.js';
import DropzoneComponent from '../../components/Dropzone/index.jsx';

export default function AdCarPage() {
  const toast = useToast();
  const [addCar] = useAddCarMutation();

  const handleSubmit = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append('image', values.image);
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('year', values.year);
    formData.append('mileage', values.mileage);
    formData.append('color', values.color);
    formData.append('engineValue', values.engineValue);
    formData.append('enginePowers', values.enginePowers);
    formData.append('leftSteeringWheel', values.leftSteeringWheel);
    formData.append('transmission', values.transmission);
    formData.append('gear', values.gear);
    await addCar(formData)
      .unwrap()
      .then(() => {
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
  const toast = useToast();
  const [files, setFiles] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    image: null,
    year: '',
    mileage: '',
    color: '',
    engineValue: '',
    enginePowers: '',
    leftSteeringWheel: true,
    transmission: '',
    gear: '',
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    if (name === 'leftSteeringWheel') {
      const { checked } = event.target;
      setFormValues({ ...formValues, [name]: !checked });
      return;
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const setUploadFiles = (files) => {
    const image = files[0];
    setFormValues((prev) => ({ ...prev, image }));
  };

  const isFilledFilds = ({
    name,
    price,
    image,
    year,
    mileage,
    color,
    enginePowers,
    engineValue,
    transmission,
    gear,
  }) => {
    if (
      name &&
      price &&
      image &&
      year &&
      mileage &&
      color &&
      enginePowers &&
      engineValue &&
      transmission &&
      gear
    ) {
      return false;
    }
    return true;
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
            image: null,
            year: '',
            mileage: '',
            color: '',
            engineValue: '',
            enginePowers: '',
            leftSteeringWheel: true,
            transmission: '',
            gear: '',
          });
          setFiles([]);
        }}
      >
        <VStack
          spacing={6}
          align='stretch'
          maxW='800px'
          m='auto'
          fontSize='20px'
        >
          <Form.Group controlId='name'>
            <Form.Label>Марка и модель</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={formValues.name}
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

          <Form.Group controlId='image'>
            <Form.Label>Фото</Form.Label>
            <DropzoneComponent
              setUploadFiles={setUploadFiles}
              setFiles={setFiles}
              files={files}
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
              label='Правое рулевое колесо'
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
              <option value='Механика'>Механика</option>
              <option value='Автомат'>Автомат</option>
              <option value='Вариатор'>Вариатор</option>
              <option value='Робот'>Робот</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='gear'>
            <Form.Label>Привод</Form.Label>
            <Form.Control
              as='select'
              name='gear'
              value={formValues.gear}
              onChange={handleSelectChange}
              required
            >
              <option value=''>Выбрать</option>
              <option value='Передний привод'>Передний привод</option>
              <option value='Задний привод'>Задний привод</option>
              <option value='Полный привод'>Полный привод</option>
            </Form.Control>
          </Form.Group>
        </VStack>

        <Center mt={30}>
          <Button
            variant='primary'
            type='submit'
            className='btn btn-primary btn-lg'
            disabled={isFilledFilds(formValues)}
          >
            Опубликовать
          </Button>
        </Center>
      </Form>
    </div>
  );
};
