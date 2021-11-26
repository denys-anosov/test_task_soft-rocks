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

  handleDeleteUser = (userId: number) => {
    this.setState(prevState => ({
      users: [...prevState.users].filter(person => person.id !== userId),
    }))
  }

  handleAddUser = () => {};
  render() {
    const { users } = this.state;
    return (
      <div>
        <button type="button">
          Add new user
        </button>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <div>
                {user.name}
              </div>
              <div>
                <button
                  onClick={() => this.handleDeleteUser(user.id)}
                  type="button"
                >
                  Delete user
                </button>
              </div>
              <div>
                <button type="button">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">More info</a>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}