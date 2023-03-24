import './Form.scss';

import React from 'react';

class Form extends React.Component {
  submitHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    console.log('123');
    e.preventDefault();
  }

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
          <label htmlFor="cities">Your favorite city:</label>
          <select name="city" id="cities">
            <option value="paris">Paris</option>
            <option value="newyork">New York</option>
            <option value="rome">Rome</option>
            <option value="barcelona">Barcelona</option>
            <option value="sydney">Sydney</option>
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
          <label>Your gender:</label>
          <div className="gender-wrapper">
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
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="myFile">Choise a file</label>
          <input type="file" id="myFile" className="button" />
        </fieldset>
        <fieldset>
          <input
            type="submit"
            id="submit"
            className="sumbit-btn button"
            onClick={(e) => this.submitHandler(e)}
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
