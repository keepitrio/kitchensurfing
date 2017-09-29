import React, { Button } from 'react';
import RequestForm from '../RequestForm';
import axios from 'axios';

export default class RequestBar extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      showComponent: false,
      conversationExists: false
    }
  }

  componentWillMount = () => {
    let self = this
    let url = '/requests/' + (this.props.profileUser && this.props.profileUser.id)
    axios.get(url)
    .then(function(response) {
      self.setState({
        conversationExists: response.data.conversation_exists
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
    } else {
      return (
        <div>
          <p>{acceptingGuests[profileUser.accepting_guests]}</p>
          <button onClick={this.onButtonClick}>Message Host</button>
          {this.state.showComponent ?
            <RequestForm profileUser={profileUser} user={user} /> : null
          }
        </div>
      )
    }
  }
}
