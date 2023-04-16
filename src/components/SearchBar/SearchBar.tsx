import './SearchBar.scss';

import { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeValue } from '../../redux/slices/search';

type SearchBarPropsType = {
  changeSearchValue: (value: string) => void;
};

function SearchBar({ changeSearchValue }: SearchBarPropsType) {
  const searchValue = useAppSelector((store) => store.search.searchValue);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(searchValue);
  const actualRef = useRef<string>();

  useEffect(() => {
    actualRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return function () {
      dispatch(changeValue(actualRef.current || ''));
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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            changeSearchValue(inputValue);
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
