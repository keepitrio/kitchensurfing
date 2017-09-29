import React, { Button } from 'react';
import RequestForm from '../RequestForm';
import axios from 'axios';

export default class RequestBar extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      showComponent: false,
      conversationExists: false,
      acceptingGuests: false
    }
  }

  componentDidMount = () => {
    let self = this
    // TODO: why is this.props.profileUser undefined when i refresh the page?
    let url = '/api/requests/' + window.location.pathname.split("/users/")[1]
    axios.get(url)
    .then(function(response) {
      self.setState({
        conversationExists: response.data.conversation_exists,
        acceptingGuests: response.data.accepting_guests
      })
    })
    .catch(function(error) {
      console.log(error)
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
    if(this.state.conversationExists === true) {
      return (
        <div>
          <a href="/messages">View Conversation</a>
        </div>
      )
    } else if(this.state.conversationExists === false
            && this.state.acceptingGuests === true) {
      return (
        <div>
          <p>{acceptingGuests[profileUser.accepting_guests]}</p>
          <button onClick={this.onButtonClick}>Request Kitchen</button>
          {this.state.showComponent ?
            <RequestForm profileUser={profileUser} user={user} /> : null
          }
        </div>
      )
    } else {
      return (
        <div>
          <p>{acceptingGuests[profileUser.accepting_guests]}</p>
          <button onClick={this.onButtonClick}>Message Host</button>
          {this.state.showComponent ?
            <RequestForm profileUser={profileUser} user={user} datePicker={false}/> : null
          }
        </div>
      )
    }
  }
}
