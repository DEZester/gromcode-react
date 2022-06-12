import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UserLIsts extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: '',
  };

  filterUsers = () =>
    this.props.users.filter(user =>
      user.name.toUpperCase().includes(this.state.value.toUpperCase()),
    );

  changeHandler = event => {
    this.setState = {
      value: event.target.value,
    };
  };

  render() {
    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={this.filterUsers().length}
          onChange={this.changeHandler}
        />
        <ul className="users">
          {this.filterUsers().map(user => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserLIsts;
