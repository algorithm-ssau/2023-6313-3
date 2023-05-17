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
          <Form.Label>Make and Model</Form.Label>
          <Form.Control
            type='text'
            name='makeModel'
            value={formValues.makeModel}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='availability'>
          <Form.Label>Availability</Form.Label>
          <Form.Control
            as='select'
            name='availability'
            value={formValues.availability}
            onChange={handleSelectChange}
            required
          >
            <option value=''>Select Availability</option>
            <option value='100'>100</option>
            <option value='200'>200</option>
            <option value='300'>300</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='generation'>
          <Form.Label>Generation</Form.Label>
          <Form.Control
            type='text'
            name='generation'
            value={formValues.generation}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='year'>
          <Form.Label>Year</Form.Label>
          <Form.Control
            type='text'
            name='year'
            value={formValues.year}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='mileage'>
          <Form.Label>Mileage</Form.Label>
          <Form.Control
            type='text'
            name='mileage'
            value={formValues.mileage}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='bodyType'>
          <Form.Label>Body Type</Form.Label>
          <Form.Control
            type='text'
            name='bodyType'
            value={formValues.bodyType}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='color'>
          <Form.Label>Color</Form.Label>
          <Form.Control
            type='text'
            name='color'
            value={formValues.color}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='engine'>
          <Form.Label>Engine</Form.Label>
          <Form.Control
            type='text'
            name='engine'
            value={formValues.engine}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='tax'>
          <Form.Label>Tax</Form.Label>
          <Form.Control
            type='text'
            name='tax'
            value={formValues.tax}
            onChange={handleSelectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='transmission'>
          <Form.Label>Transmission</Form.Label>
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

        <Form.Group controlId='drive'>
          <Form.Label>Drive</Form.Label>
          <Form.Control
            as='select'
            name='drive'
            value={formValues.drive}
            onChange={handleSelectChange}
            required
          >
            <option value=''>Select Drive</option>
            <option value='Front-wheel drive'>Front-wheel drive</option>
            <option value='Rear-wheel drive'>Rear-wheel drive</option>
            <option value='All-wheel drive'>All-wheel drive</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='steering'>
          <Form.Label>Steering</Form.Label>
          <Form.Control
            as='select'
            name='steering'
            value={formValues.steering}
            onChange={handleSelectChange}
            required
          >
            <option value=''>Select Steering</option>
            <option value='Left'>Left</option>
            <option value='Right'>Right</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='condition'>
          <Form.Label>Condition</Form.Label>
          <Form.Control
            as='select'
            name='condition'
            value={formValues.condition}
            onChange={handleSelectChange}
            required
          >
            <option value=''>Select Condition</option>
            <option value='New'>New</option>
            <option value='Used'>Used</option>
            <option value='Reconditioned'>Reconditioned</option>
          </Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};
