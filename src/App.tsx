import React from 'react';
import { getUsers } from './api/api';
import './App.css';
import {ContactList} from './components/ContactList/ContactList';

interface State {
  users: User[],
}


class App extends React.Component<{}, State> {
  state: State = {
    users: [],
  }

  async componentDidMount () {
    const loadedUsers = await getUsers();

    this.setState({ users: loadedUsers });
  }

  addUser = (newUser: User) => {
    this.setState(prevState => ({
      users: [...prevState.users, newUser]
    }))
  };

  deleteUser = (selectedUserId: number) => {
    this.setState(prevState => ({
      users: [...prevState.users.filter(user => user.id !== selectedUserId)]
    }))
  };

  render() {
    const {users} = this.state;

    return (
      <main className="App">
        <ContactList
          visibleUsers={users}
          onAdd={this.addUser}
          onDelete={this.deleteUser}
        />
      </main>
    );
  }
}

export default App;
