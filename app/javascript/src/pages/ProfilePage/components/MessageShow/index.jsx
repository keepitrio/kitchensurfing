import React from 'react';
import axios from 'axios';
import RequestForm from '../RequestForm'

export default class MessageShow extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      request: null,
      messages: []
    }
  }

  componentWillMount = () => {
    let self = this;
    let url = "/api/messages/" + self.props.requestID
    axios.get(url)
    .then(function(response) {
      self.setState({
        request: response.data.request,
        messages: response.data.messages
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  getUserName = (id) => {
    if(id === this.props.user.id) {
      return this.props.user.first_name
    } else {
      return this.props.profileUser.first_name
    }
  }

  render() {
    if(this.state.request === null) {
      return null
    }

    const { user } = this.props
    const { profileUser } = this.props
    const messageList = this.state.messages.map((message) =>
      <li>{this.getUserName(message.user_id)}: {message.message}</li>
    );
    return (
     <div>
      <ul>
        <li>
          {this.getUserName(this.state.request.id)}: {this.state.request.message}
        </li>
        {messageList}
        <RequestForm datePicker={false} requestID={this.state.request.id} />
      </ul>
    </div>
    )
  }
}
