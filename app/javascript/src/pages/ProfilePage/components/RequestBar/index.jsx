import React, { Button } from 'react';
import Messages from '../Messages'

export default class RequestBar extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      showComponent: false
    }
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
    return (
      <div>
        <p>{acceptingGuests[profileUser.accepting_guests]}</p>
        <button onClick={this.onButtonClick}>Message Host</button>
        {this.state.showComponent ?
          <Messages profileUser={profileUser} user={user} /> : null
        }
      </div>
    )
  }
}
