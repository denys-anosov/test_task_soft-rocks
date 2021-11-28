import React from 'react';
import { loadUsers } from './api/api';
import './App.scss';
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

  // fetching users from jsonPlaceHolder and saving to state
  async componentDidMount () {
    const loadedUsers = await loadUsers();

    this.setState({ users: loadedUsers });
  }

  // adds new user to state after submitting the form
  addUser = (newUser: User) => {
    this.setState(prevState => ({
      users: [...prevState.users, newUser]
    }))
  };

  // filters out the user with provided id from users array in state
  deleteUser = (selectedUserId: number) => {
    this.setState(prevState => ({
      users: [...prevState.users.filter(user => user.id !== selectedUserId)]
    }))
  };

  // finds user by provided id and if found - sets it to currentUser field
  findUserById = (id: number) => {
    const foundUser = this.state.users
      .find(user => user.id === id);

    if (foundUser) {
      this.setState({currentUser: foundUser });
    }
  };

  render() {
    const { users } = this.state;

    return (
      <main className="Container">
        <section className="App">
          <Routes>
            <Route // on the home page only ContactList component is rendered
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
            <Route // on contact-info page the details of the selected user are rendered
              path="/contact-info"
              element={<ContactInfo currentUser={this.state.currentUser}/>}
            />
            <Route // if any other string is entered to url - redirects you to home page
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </section>
      </main>
    );
  }
}

export default App;
