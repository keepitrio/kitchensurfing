import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

export default class RequestForm extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      message: ''
    };
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

  handleRequestSubmit = (e) => {
    e.preventDefault();
    if(this.props.requestID === null) {
      axios.post('/requests', {
        message: this.state.message,
        host_id: this.props.profileUser && this.props.profileUser.id,
        traveler_id: this.props.user && this.props.user.id
      })
      .then(function(response){
        console.log("success")
        document.getElementById("request-form").reset();
        location.reload();
      })
      .catch(function(error){
        console.log(error)
      })
    } else {
      axios.post('/requests', {
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        message: this.state.message,
        host_id: this.props.profileUser && this.props.profileUser.id,
        traveler_id: this.props.user && this.props.user.id
      })
      .then(function(response){
        console.log("success")
        document.getElementById("request-form").reset();
        location.reload();
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }

  handleMessageSubmit = (e) => {
    e.preventDefault();
    axios.post('/messages', {
      request_id: this.props.requestID && this.props.requestID,
      user_id: this.props.user && this.props.user.id,
      message: this.state.message
    })
    .then(function(response) {
      document.getElementById("request-form").reset();
      location.reload();
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    if(this.props.datePicker === false && this.props.requestID != null) {
      return (
        <form id="request-form" onSubmit={this.handleMessageSubmit}>
          <textarea
            type="text"
            name="message"
            onChange={this.handleInputChange}
            placeholder="Write a message"
          />
          <input type="submit" value="Send" />
        </form>
      )
    } else if(this.props.datePicker === false && this.props.requestID === null) {
      return (
        <form id="request-form" onSubmit={this.handleRequestSubmit}>
          <input
            type="text"
            name="message"
            onChange={this.handleInputChange}
            placeholder="Write a message"
          />
          <input type="submit" value="Send" />
        </form>
      )
    } else {
      return (
        <form id="request-form" onSubmit={this.handleRequestSubmit}>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleStartChange}
          />
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleEndChange}
          />
          <input
            type="text"
            name="message"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Send" />
        </form>
      )
    }
  }
}
