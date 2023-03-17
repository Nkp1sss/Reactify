import './SearchBar.scss';

import React from 'react';

import { TSearchBarState } from '../types/component';

class SearchBar extends React.Component<object, TSearchBarState> {
  constructor(props: object) {
    super(props);

    this.state = {
      inputValue: localStorage.getItem('savedValue') || '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount(): void {
    const savedValue = localStorage.getItem('savedValue');

    if (savedValue) {
      this.setState({
        inputValue: savedValue,
      });
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('savedValue', this.state.inputValue);
  }

  changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div className="search__container">
        <p className="search__title">Go ahead, hover over search</p>
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={this.state.inputValue}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
