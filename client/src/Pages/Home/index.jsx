import { useState } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import SearchField from '../../components/SearchField';
import Footer from '../../components/Footer';

import styles from './style.module.css';
import { cars } from '../../fake-db/fakeCars';

export default function HomePage() {
  const [searchValue, setSearchValue] = useState('');

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={styles['body']}>
      <Navbar />
      <SearchField searchFn={(e) => setSearchValue(e.target.value)} />
      <div className='container mt-5'>
        <div className={'row'}>
          {filteredCars.map((car) => (
            <Card
              key={car.id}
              title={car.name}
              price={car.price}
              imageUrl={car.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
