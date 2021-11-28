import React from 'react';
import { loadUsers } from './api/api';
import './App.css';
import { ContactList } from './components/ContactList/ContactList';
import { ContactInfo } from './components/ContactInfo/ContactInfo';
import { Routes, Route, Navigate } from 'react-router-dom';

interface State {
  users: User[],
  currentUser: User,
}


class App extends React.Component<{}, State> {
  state: State = {
    users: [],
    currentUser: {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    },
  }

  async componentDidMount () {
    const loadedUsers = await loadUsers();

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

  findUserById = (id: number) => {
    const foundUser = this.state.users
      .find(user => user.id === id);

    if (foundUser) {
      this.setState({currentUser: foundUser });
    }
  };

  render() {
    const {users} = this.state;

    return (
      <main className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                visibleUsers={users}
                onAdd={this.addUser}
                onDelete={this.deleteUser}
                onFindUser={this.findUserById}
              />
            }
          />
          <Route
            path="/contact-info"
            element={<ContactInfo currentUser={this.state.currentUser}/>}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </main>
    );
  }
}

export default App;
