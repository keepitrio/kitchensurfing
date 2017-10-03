import React from 'react';

export default class UserHeader extends React.Component {
	render() {
    const { user } = this.props;
    return (
      <div className="user-info">
        <p>{user.first_name} {user.last_name}</p>
        <p>{user.location}</p>
      </div>
    )
  }
}
