import './Form.scss';

import React from 'react';

import { TFormCard } from '../../types/component';

type TFormProps = {
  addCard: (card: TFormCard) => void;
};

type TFormState = {
  isValidate: boolean;
};

class Form extends React.Component<TFormProps, TFormState> {
  private form = React.createRef<HTMLFormElement>();
  private textInput = React.createRef<HTMLInputElement>();
  private dateInput = React.createRef<HTMLInputElement>();
  private selectInput = React.createRef<HTMLSelectElement>();
  private fileInput = React.createRef<HTMLInputElement>();
  private imageLink = '';

  private checkboxInput = React.createRef<HTMLInputElement>();
  private maleRadioInput = React.createRef<HTMLInputElement>();
  private femaleRadioInput = React.createRef<HTMLInputElement>();

  submitHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();

    if (!this.isValidate()) {
      return;
    }

    const card: TFormCard = {
      fullname: this.textInput.current?.value || '',
      birthday: this.dateInput.current?.value || '',
      favoriteCity: this.selectInput.current?.value || '',
      picture: this.imageLink ? this.imageLink : '',
      permission: this.checkboxInput.current?.checked || false,
      gender: this.maleRadioInput.current?.checked
        ? 'male'
        : this.femaleRadioInput.current?.checked
        ? 'female'
        : '',
    };

    this.props.addCard(card);

    this.imageLink = '';
    this.form.current?.reset();
  }

  fileInputHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      this.imageLink = URL.createObjectURL(target.files[0]);
    }
  }

  isValidate() {
    let isValidForm = true;

    console.log(this.textInput.current?.value.split(' ').length);
    if (!this.textInput.current?.value) {
      this.textInput.current?.setCustomValidity('Must be filled in');
      isValidForm = false;
    } else if (this.textInput.current?.value.split(' ').length !== 2) {
      this.textInput.current?.setCustomValidity('Fullname must be two words');
      isValidForm = false;
    } else {
      this.textInput.current?.setCustomValidity('');
    }

    if (!this.dateInput.current?.value) {
      this.dateInput.current?.setCustomValidity('Must be filled in');
      isValidForm = false;
    } else {
      this.dateInput.current?.setCustomValidity('');
    }

    if (!(this.maleRadioInput.current?.checked || this.femaleRadioInput.current?.checked)) {
      this.femaleRadioInput.current?.setCustomValidity('Must be filled in');
      isValidForm = false;
    } else {
      this.femaleRadioInput.current?.setCustomValidity('');
    }

    if (!this.fileInput.current?.value) {
      this.fileInput.current?.setCustomValidity('Must be filled in');
      isValidForm = false;
    } else {
      this.fileInput.current?.setCustomValidity('');
    }

    this.setState({
      isValidate: isValidForm,
    });

    return isValidForm;
  }

  render() {
    return (
      <form className="form" ref={this.form}>
        <fieldset>
          <div>
            <label htmlFor="fullname">Fullname:</label>
            <input
              type="text"
              className="input-text"
              name="fullname"
              id="fullname"
              ref={this.textInput}
            />
          </div>
          {this.textInput.current && this.textInput.current.validationMessage && (
            <div className="error-message">{this.textInput.current.validationMessage}</div>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            className="input-date"
            name="birthday"
            id="birthday"
            ref={this.dateInput}
          />
          {this.dateInput.current && this.dateInput.current.validationMessage && (
            <div className="error-message">{this.dateInput.current.validationMessage}</div>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="cities">Your favorite city:</label>
          <select name="city" id="cities" ref={this.selectInput}>
            <option value="paris">Paris</option>
            <option value="newyork">New York</option>
            <option value="rome">Rome</option>
            <option value="barcelona">Barcelona</option>
            <option value="sydney">Sydney</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Your gender:</label>
          <div className="gender-wrapper">
            <div>
              <label>
                <input type="radio" name="gender" value="male" ref={this.maleRadioInput} /> Male
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="gender" value="female" ref={this.femaleRadioInput} />
                Female
              </label>
            </div>
          </div>
          {this.femaleRadioInput.current && this.femaleRadioInput.current.validationMessage && (
            <div className="error-message">{this.femaleRadioInput.current.validationMessage}</div>
          )}
        </fieldset>
        <fieldset>
          <label className="input-file">
            <input
              type="file"
              name="file"
              ref={this.fileInput}
              onChange={(e) => this.fileInputHandler(e)}
            />
            <span>Select a file</span>
          </label>
          {this.fileInput.current && this.fileInput.current.validationMessage && (
            <div className="error-message">{this.fileInput.current.validationMessage}</div>
          )}
        </fieldset>
        <fieldset>
          <label>
            <input
              type="checkbox"
              className="form__input"
              name="permission"
              id="permission"
              ref={this.checkboxInput}
            />
            I want to receive notifications about promo, sales, etc.
          </label>
        </fieldset>
        <fieldset>
          <input
            type="submit"
            className="sumbit-btn button"
            name="submit"
            id="submit"
            onClick={(e) => this.submitHandler(e)}
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
