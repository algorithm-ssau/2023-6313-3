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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
        <AddCarPage />
      </Center>
      <Footer />
    </ChakraProvider>
  );
}

const AddCarPage = () => {
  const [formValues, setFormValues] = useState({
    makeModel: '',
    availability: '',
    generation: '',
    year: '',
    mileage: '',
    bodyType: '',
    color: '',
    engine: '',
    tax: '',
    transmission: '',
    drive: '',
    steering: '',
    condition: '',
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues); // Отправка данных на сервер
  };

  return (
    <div className='container mt-5'>
      <h1>Add Car</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='makeModel'>
          <Form.Label>Марка и модель</Form.Label>
          <Form.Control
            type='text'
            name='makeModel'
            value={formValues.makeModel}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='price'>
          <Form.Label>Цена</Form.Label>
          <Form.Control
            type='number'
            name='price'
            value={formValues.price}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='imageUrl'>
          <Form.Label>Фото</Form.Label>
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
          <Form.Label>Пробег</Form.Label>
          <Form.Control
            type='text'
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

        <Form.Group controlId='colorengineVolume'>
          <Form.Label>Оъём двигателя</Form.Label>
          <Form.Control
            type='text'
            name='engineVolume'
            value={formValues.engineVolume}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='enginePowers'>
          <Form.Label>Мощность</Form.Label>
          <Form.Control
            type='text'
            name='enginePowers'
            value={formValues.enginePowers}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>


        {/* исправить */}
        <Form.Group controlId='leftSteeringWheel'> 
          <Form.Label>Левое рулевое колесо</Form.Label>
          <Form.Control
            type='text'
            name='leftSteeringWheel'
            value={formValues.leftSteeringWheel}
            onChange={handleSelectChange}
            required
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
            <option value=''>Select Transmission</option>
            <option value='Manual'>Manual</option>
            <option value='Automatic'>Automatic</option>
            <option value='CVT'>CVT</option>
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
            <option value=''>Select Drive</option>
            <option value='Front-wheel drive'>Front-wheel drive</option>
            <option value='Rear-wheel drive'>Rear-wheel drive</option>
            <option value='Full'>Full</option>
          </Form.Control>
        </Form.Group>      
     
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};
