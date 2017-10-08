import React, { Button } from 'react';
import RequestForm from '../RequestForm';
import MessageShow from '../MessageShow';
import axios from 'axios';

export default class RequestBar extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showComponent: false,
      conversationExists: false,
      acceptingGuests: false,
      requestID: null
    };
  }

  componentDidMount = () => {
    let self = this
    let url = '/api/requests/' + window.location.pathname.split("/users/")[1]
    axios.get(url)
    .then(function(response) {
      self.setState({
        conversationExists: response.data.conversation_exists,
        acceptingGuests: response.data.accepting_guests
      })
      if(response.data.request) {
        self.setState({
          requestID: response.data.request.id
        })
      }
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  onButtonClick = () => {
    this.setState({
      showComponent: true
    })
  }

  render() {
    const { user } = this.props;
    const { profileUser } = this.props;
    const acceptingGuests = {
      true: "Accepting Guests",
      null: "Maybe Accepting Guests",
      false: "Not Accepting Guests"
    }
    const messagesURL = "/messages/" + this.state.requestID
    if(this.state.conversationExists === true) {
      return (
        <div className="profile-container">
          <p><strong>{acceptingGuests[profileUser.accepting_guests]}</strong></p>
          <div className="button-container">
            {this.state.showComponent ? null : <button className="profile-option-button" onClick={this.onButtonClick}>View Conversation</button> }
            {this.state.showComponent ?
              <MessageShow profileUser={profileUser} user={user} requestID={this.state.requestID} /> : null
            }
          </div>
        </div>
      )
    } else if(this.state.conversationExists === false
            && this.state.acceptingGuests === true) {
      return (
        <div>
          <div className="profile-container">
            <p>{acceptingGuests[profileUser.accepting_guests]}</p>
            <div className="button-container">
              <button className="profile-option-button" onClick={this.onButtonClick}>Request Kitchen</button>
              {this.state.showComponent ?
                <RequestForm profileUser={profileUser} user={user} requestID={this.state.requestID} /> : null
              }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="profile-container">
            <p>{acceptingGuests[profileUser.accepting_guests]}</p>
            <div className="button-container">
              <button className="profile-option-button" onClick={this.onButtonClick}>Message Host</button>
              {this.state.showComponent ?
                <RequestForm profileUser={profileUser} user={user} datePicker={false} requestID={this.state.requestID} /> : null
              }
            </div>
          </div>
        </div>
      )
    }
  }
}
