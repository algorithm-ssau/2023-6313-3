import styles from './style.module.css';

function SearchField({ searchFn }) {
  return (
    <form className={styles['searching-line']}>
      <input
        className={styles['input']}
        type='search'
        placeholder='Искать здесь...'
        onChange={searchFn}
      />
    </form>
  );
}

export default SearchField;
