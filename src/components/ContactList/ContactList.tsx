import React from "react";
import { ConfirmDelete } from '../ConfirmDelete/ConfirmDelete';
import './ContactList.scss';
import { Link } from 'react-router-dom';

interface Props {
  visibleUsers: User[],
  onAdd: (newUser: User) => void,
  onDelete: (selectedUserId: number) => void,
  onFindUser: (id: number) => void,
}

interface State {
  id: number,
  name: string,
  username?: string,
  email: string,
  phone?: string,
  website?: string,
  isConfirmationVisible: boolean,
  selectedUserId: number;
}

export class ContactList extends React.Component<Props, State> {
  state: State = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    isConfirmationVisible: false,
    selectedUserId: 0,
  }

  // ties input data to relevant state fields
  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  };

  // creates new user after clicking submit button and sends it to App component/state/currentUser
  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      ...this.state,
      id: this.props.visibleUsers.length + 1,
    }

    this.props.onAdd(newUser);

    this.setState({
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    })
  };

  // makes confirmation of deletion visible or invisible with the provided boolean value
  setConfirmationVisibility = (value: boolean) => {
    this.setState({
      isConfirmationVisible: value,
    })
  };

  // makes confirmation window visible after clicking the delete button, also sets selectedUserId field in state
  // with the id of the user next to delete button
  deleteClickHandler = (userId: number) => {
    this.setConfirmationVisibility(true);
    this.setState({
      selectedUserId: userId,
    })
  };

  render() {
    const {
      name,
      username,
      email,
      phone,
      website,
    } = this.state;
    return (
      <>
        <h1 className="Main-heading">List of users</h1>
        <div className="Main-page">
          <ConfirmDelete // passes function and value to control confirmation window visibility through props
            isVisible={this.state.isConfirmationVisible} // also passes function to delete a user and the id of selected user
            setVisibility={this.setConfirmationVisibility}
            onDelete={this.props.onDelete}
            selectedUserId={this.state.selectedUserId}
          />
          <ul className="ContactList">
            {this.props.visibleUsers.map(user => (
              <li
                className="ContactList__item"
                key={user.id}
              >
                <div>
                  {`${user.id}. `}
                  {user.name}
                </div>
                <div>
                  <button
                    className="ContactList__button"
                    onClick={() => this.deleteClickHandler(user.id)}
                    type="button"
                  >
                    Delete user
                  </button>
                  <button // button with link inside to go to contact-info page, where info of selected user is shown
                    className="ContactList__button"
                    type="button"
                  >
                    <Link
                      to="contact-info"
                      onClick={() => this.props.onFindUser(user.id)}
                      className="ContactList__button--link"
                    >
                      More info
                    </Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <form
            className="Form"
            onSubmit={this.submitHandler}
          >
            <p className="Form__name">Add new user</p>
            <input
              onChange={this.inputHandler}
              value={name}
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              onChange={this.inputHandler}
              value={username}
              name="username"
              type="text"
              placeholder="Username"
            />
            <input
              onChange={this.inputHandler}
              value={email}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              onChange={this.inputHandler}
              value={phone}
              name="phone"
              type="tel"
              placeholder="Phone"
            />
            <input
              onChange={this.inputHandler}
              value={website}
              name="website"
              type="text"
              placeholder="Website"
            />
            <button
              className="Form__button"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}