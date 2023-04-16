import './SearchBar.scss';

import { useEffect, useRef, useState } from 'react';

type SearchBarPropsType = {
  changeSearchValue: (value: string) => void;
};

function SearchBar(props: SearchBarPropsType) {
  const [inputValue, setInputValue] = useState(() => localStorage.getItem('savedValue') || '');
  const actualRef = useRef<string>();

  useEffect(() => {
    actualRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return function () {
      saveToLocalStorage();
    };
  }, []);

  function saveToLocalStorage() {
    if (actualRef.current || actualRef.current === '') {
      localStorage.setItem('savedValue', actualRef.current);
    }
  }

  return (
    <div className="search__container">
      <p className="search__title">Go ahead, hover over search</p>
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.changeSearchValue(inputValue);
            saveToLocalStorage();
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
