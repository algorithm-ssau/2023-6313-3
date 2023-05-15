<<<<<<< HEAD
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import SearchField from "../../components/SearchField";
import Footer from "../../components/Footer";

import styles from "./style.module.css";
import { cars } from "../../fake-db/fakeCars";

export default function HomePage() {

  const [searchValue, setSearchValue] = useState("");
=======
import { useState } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import SearchField from '../../components/SearchField';
import Footer from '../../components/Footer';

import styles from './style.module.css';
import { cars } from '../../fake-db/fakeCars';

export default function HomePage() {
  const [searchValue, setSearchValue] = useState('');
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
<<<<<<< HEAD
    <div className={styles["body"]}>
      <Navbar />
      <SearchField searchFn={e => setSearchValue(e.target.value)} />
      <div className="container mt-5">
        <div className={'row'} >
=======
    <div className={styles['body']}>
      <Navbar />
      <SearchField searchFn={(e) => setSearchValue(e.target.value)} />
      <div className='container mt-5'>
        <div className={'row'}>
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
          {filteredCars.map((car) => (
            <Card
              key={car.id}
              title={car.name}
              price={car.price}
<<<<<<< HEAD
              imageUrl={car.imageUrl} />
=======
              imageUrl={car.imageUrl}
            />
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
