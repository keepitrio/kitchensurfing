import PropTypes from 'prop-types';
import React from 'react';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            placeholder="first_name"
          />
        </form>
      </div>
    );
  }
}
