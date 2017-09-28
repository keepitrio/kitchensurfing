import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

export default class Messages extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      startDate: moment(),
      endDate: moment(),
      message: ''
    }
  }

  handleStartChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  handleEndChange = (date) => {
    this.setState({
      endDate: date
    })
  }

  handleInputChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/requests', {
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      message: this.state.message,
      host_id: this.props.profileUser && this.props.profileUser.id,
      traveler_id: this.props.user && this.props.user.id
    })
    .then(function(response){
      console.log("success")
      console.log(response)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartChange}
        />
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleEndChange}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="message"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}
