import React from 'react';
import { getUsers } from '../../api/api';

interface State {
  users: User[];
}

export class ContactList extends React.Component<{}, State> {
  state: State = {
    users: [],
  }
  async componentDidMount () {
    const loadedUsers = await getUsers();

    this.setState({ users: loadedUsers })
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}