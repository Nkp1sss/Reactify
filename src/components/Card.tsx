import './Card.scss';

import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          className="photo"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?   ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          alt="picture"
        />

        {/* цитату тут добавить */}

        <h1 className="fullname">William Chase</h1>
        <div className="info">
          <div className="work">
            <p className="profession">Web Designer</p>
            <p className="company">Amazon.com</p>
          </div>
          <p className="age">43 years old</p>
        </div>

        {/* линки тут */}
        {/* style="margin: 24px 0;" */}
        <div>
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
