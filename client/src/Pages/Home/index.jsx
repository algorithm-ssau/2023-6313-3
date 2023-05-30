import { useEffect, useState } from 'react';
import { ChakraProvider, Center, Heading } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import SearchField from '../../components/SearchField';
import Footer from '../../components/Footer';
import { useGetCarsQuery } from '../../redux/api/carsApi.js';
import PaginationNums from '../../components/Pagination';

import styles from './style.module.css';

export default function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data, refetch, isFetching } = useGetCarsQuery({
    page: currentPage,
    size: 12,
    searchPattern: searchValue,
  });

  const filteredCars = data?.items.filter((car) =>
    car.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    refetch();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <ChakraProvider>
      <div className={styles['body']}>
        <Navbar />
        <SearchField searchFn={handleSearch} />
        <div className='container mt-5'>
          {isFetching ? (
            <Center m={20}>
              <Spinner
                thickness='4px'
                speed='0.4s'
                emptyColor='gray.200'
                color='red.500'
                size='xl'
              />
            </Center>
          ) : filteredCars.length ? (
            <div className={'row'}>
              {filteredCars.map((car) => (
                <Card
                  key={car.id}
                  id={car.id}
                  title={car.name}
                  price={car.price}
                  imageUrl={car.imageUrl}
                  inFavorite={car.inFavorites}
                />
              ))}
            </div>
          ) : (
            <Center m={100}>
              <Heading color={'blackAlpha.700'} fontSize={30} fontWeight={500}>
                Таких машин не нашлось
              </Heading>
            </Center>
          )}
        </div>
        <PaginationNums
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pagesCount={data?.paginationContext.pagesCount}
        />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
