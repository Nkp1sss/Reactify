import './Form.scss';

import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <fieldset>
          <label htmlFor="fullname">Fullname:</label>
          <input type="text" className="input-text" name="fullname" id="fullname" />
        </fieldset>
        <fieldset>
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" className="input-date" name="birthday" id="birthday" />
        </fieldset>
        <fieldset>
          <label htmlFor="cities">Choose your favorite city:</label>
          <select name="city" id="cities">
            <option value="paris">Париж</option>
            <option value="newyork">Нью-Йорк</option>
            <option value="rome">Рим</option>
            <option value="barcelona">Барселона</option>
            <option value="sydney">Сидней</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Languages you speak:</label>
          <div>
            <div>
              <label htmlFor="russian">Russian</label>
              <input type="checkbox" className="form__input" name="russian" id="russian" />
            </div>
            <div>
              <label htmlFor="belarusian">Belarusian</label>
              <input type="checkbox" className="form__input" name="belarusian" id="belarusian" />
            </div>
            <div>
              <label htmlFor="english">English</label>
              <input type="checkbox" className="form__input" name="english" id="english" />
            </div>
            <div>
              <label htmlFor="german">German</label>
              <input type="checkbox" className="form__input" name="german" id="german" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <label>Choose your gender:</label>
          <div>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="myFile">Выбрать файл</label>
          <input type="file" id="myFile" />
        </fieldset>
      </form>
    );
  }
}

export default Form;
