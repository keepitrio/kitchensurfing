import React from 'react';
import axios from 'axios';
import PlacesAutocomplete from 'react-places-autocomplete'

export default class SearchBar extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      searchLocation: ''
    }
  }

  locationOnChange = (searchLocation) => {
    this.setState({ searchLocation });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    window.location = '/places?' + this.state.searchLocation;
  }

	render() {
    const locationInputProps = {
      value: this.state.searchLocation,
      onChange: this.locationOnChange,
      placeholder: 'Where are you going?'
    }

    const locationOptions = {
      types: ['(cities)']
    }

		return (
      <form className='search-bar' onSubmit={this.handleSubmit}>
        <div className='search-input'>
          <PlacesAutocomplete
            inputProps={locationInputProps}
            options={locationOptions}
          />
        </div>
        <input type='submit' value='🔍' />
      </form>
    )
	}
}
