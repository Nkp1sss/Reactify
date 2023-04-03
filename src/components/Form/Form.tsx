import './Form.scss';

import React from 'react';
import { useForm } from 'react-hook-form';

import { TFormCard } from '../../types/component';

type TFormProps = {
  addCard: (card: TFormCard) => void;
};

function Form(props: TFormProps) {
  let imageLink = '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormCard>({ reValidateMode: 'onSubmit' });

  function fileInputHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      imageLink = URL.createObjectURL(target.files[0]);
    }
  }

  function birthdayValidate(value: string) {
    console.log(value);
    console.log(new Date().toLocaleString());

    return new Date(value) < new Date();
  }

  const onSubmit = handleSubmit(function (card, event) {
    event?.preventDefault();

    props.addCard({
      ...card,
      picture: imageLink,
    });

    imageLink = '';
    reset();
  });

  return (
    <form className="form" data-testid="form">
      <fieldset>
        <div>
          <label htmlFor="fullname">Fullname:</label>
          <input
            {...register('fullname', {
              required: 'Must be filled in',
              pattern: {
                value: /^\w+\s+\w+$/,
                message: 'Fullname must be two words',
              },
            })}
            className="input-text"
          />
        </div>
        {errors.fullname && (
          <div className="error-message">{errors.fullname.message || 'Error'}</div>
        )}
      </fieldset>
      <fieldset>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          {...register('birthday', {
            required: 'Must be filled in',
            validate: birthdayValidate,
          })}
          className="input-date"
        />
        {errors.birthday && (
          <div className="error-message">
            {errors.birthday.message || "The date must be less than today's date"}
          </div>
        )}
      </fieldset>
      <fieldset>
        <label htmlFor="cities">Your favorite city:</label>
        <select {...register('favoriteCity')}>
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
              <input type="radio" value="male" {...register('gender', { required: true })} /> Male
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="female" {...register('gender', { required: true })} />
              Female
            </label>
          </div>
        </div>
        {errors.gender && <div className="error-message">{errors.gender.message || 'Error'}</div>}
      </fieldset>
      <fieldset>
        <label className="input-file">
          <input
            type="file"
            {...register('picture', { required: 'Must be filled in' })}
            onChange={(e) => fileInputHandler(e)}
          />
          <span>Select a file</span>
        </label>
        {errors.picture && <div className="error-message">{errors.picture.message || 'Error'}</div>}
      </fieldset>
      <fieldset>
        <label>
          <input type="checkbox" {...register('permission')} className="form__input" />I want to
          receive notifications about promo, sales, etc.
        </label>
      </fieldset>
      <fieldset>
        <input
          type="submit"
          className="sumbit-btn button"
          name="submit"
          id="submit"
          onClick={onSubmit}
        />
      </fieldset>
    </form>
  );
}

export default Form;
