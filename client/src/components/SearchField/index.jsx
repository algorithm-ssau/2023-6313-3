import { useState } from 'react';
import styles from './style.module.css';

function SearchField({ searchFn }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <form
      className={styles['searching-line']}
      onSubmit={(e) => e.preventDefault() || searchFn(searchValue)}
    >
      <input
        className={styles['input']}
        placeholder='Искать здесь...'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <input type='submit' hidden />
      <button className={styles['find']} type='submit'>
        Найти
      </button>
    </form>
  );
}

export default SearchField;
