import { Center, Spinner } from '@chakra-ui/react';

import styles from './style.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Favourite from '../../components/Favourite';
import { useGetFavsQuery } from '../../redux/api/favApi';
import { useGetUserQuery } from '../../redux/api/authApi';

export default function ProfilePage() {
  const { data, isLoading } = useGetFavsQuery();
  const { data: userData, isLoading: isUserLoading } = useGetUserQuery();

  return (
    <div className={styles['body']}>
      <Navbar />

      <div className={styles['wrap']}>
        <div className={styles['container']}>
          <h1 className={styles['profile']}>Профиль</h1>
          <img
            className={styles['photo']}
            src='https://hombex.com/assets/img/icon_profile.png'
            alt=''
          />
          {isUserLoading || (
            <h1 className={styles['name']}>{userData.username}</h1>
          )}

          <Center>
            <div>
              <h1 className={styles['number']}>Телефон: +7(937)xxx-xx-xx</h1>

              {isUserLoading || (
                <h1 className={styles['mail']}>e-mail: {userData.email}</h1>
              )}
            </div>
          </Center>

          <a href='#' className={styles['info']}>
            О пользователе
          </a>
        </div>

        <div className={styles['container_like']}>
          <h1 className={styles['favourites']}>Избранное</h1>

          <div className={styles['wrap-favourite']}>
            {isLoading ? (
              <Center m={20}>
                <Spinner
                  thickness='4px'
                  speed='0.4s'
                  emptyColor='gray.200'
                  color='red.500'
                  size='xl'
                />
              </Center>
            ) : (
              data.items.map((car) => (
                <Favourite
                  key={car.id}
                  id={car.id}
                  imageUrl={car.imageUrl}
                  name={car.name}
                  price={car.price}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
