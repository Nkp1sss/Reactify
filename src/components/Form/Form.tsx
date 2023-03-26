import './Form.scss';

import React from 'react';

import { TFormCard } from '../../types/component';

type TFormProps = {
  addCard: (card: TFormCard) => void;
};

class Form extends React.Component<TFormProps> {
  private form: React.RefObject<HTMLFormElement>;

  private textInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private selectInput: React.RefObject<HTMLSelectElement>;
  private fileInput: React.RefObject<HTMLInputElement>;
  private imageLink: string;

  private checkboxInput: React.RefObject<HTMLInputElement>;
  private maleRadioInput: React.RefObject<HTMLInputElement>;
  private femaleRadioInput: React.RefObject<HTMLInputElement>;

  constructor(props: TFormProps) {
    super(props);
    this.form = React.createRef();

    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectInput = React.createRef();
    this.fileInput = React.createRef();
    this.imageLink = '';

    this.checkboxInput = React.createRef();
    this.maleRadioInput = React.createRef();
    this.femaleRadioInput = React.createRef();
  }

  submitHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();

    const isMale = this.maleRadioInput.current?.checked;
    const isFemale = this.femaleRadioInput.current?.checked;

    const object: TFormCard = {
      fullname: this.textInput.current?.value || '',
      birthday: this.dateInput.current?.value || '',
      favoriteCity: this.selectInput.current?.value || '',
      picture: this.imageLink ? this.imageLink : '',
      permission: this.checkboxInput.current?.checked || false,
      gender: isMale ? 'male' : isFemale ? 'female' : '',
    };

    this.props.addCard(object);

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
    
  }

  render() {
    return (
      <form className="form" ref={this.form}>
        <fieldset>
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            className="input-text"
            name="fullname"
            id="fullname"
            ref={this.textInput}
          />
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
        </fieldset>
        <fieldset>
          <label className="input-file">
            <input
              type="file"
              name="file"
              ref={this.fileInput}
              onChange={(e) => this.fileInputHandler(e)}
            />
            <span>Выберите файл</span>
          </label>
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
