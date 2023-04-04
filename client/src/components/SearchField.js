import React from "react";

function SearchField() {
  return (
    <form class="searching-line">
      <input type="search" placeholder="Искать здесь..." />
      <button class="find" type="submit">
        Найти
      </button>
    </form>
  );
}

export default SearchField;
