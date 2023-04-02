import './SearchBar.scss';

import React, { useEffect, useRef, useState } from 'react';

function SearchBar() {
  const [inputValue, setInputValue] = useState(() => localStorage.getItem('savedValue') || '');
  const actualRef = useRef<string>();

  useEffect(() => {
    actualRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return function () {
      if (actualRef.current) {
        localStorage.setItem('savedValue', actualRef.current);
      }
    };
  }, []);

  return (
    <div className="search__container">
      <p className="search__title">Go ahead, hover over search</p>
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
