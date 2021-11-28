import React from "react";
import { ConfirmDelete } from '../ConfirmDelete/ConfirmDelete';
import './ContactList.css';

interface Props {
  visibleUsers: User[],
  onAdd: (newUser: User) => void,
  onDelete: (selectedUserId: number) => void,
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

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  };

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

  setConfirmationVisibility = (value: boolean) => {
    this.setState({
      isConfirmationVisible: value,
    })
  };

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
      <div>
        <ConfirmDelete
          isVisible={this.state.isConfirmationVisible}
          setVisibility={this.setConfirmationVisibility}
          onDelete={this.props.onDelete}
          selectedUserId={this.state.selectedUserId}
        />
        <ul>
          {this.props.visibleUsers.map(user => (
            <li key={user.id}>
              <div>
                {user.name}
              </div>
              <div>
                <button
                  onClick={() => this.deleteClickHandler(user.id)}
                  type="button"
                >
                  Delete user
                </button>
              </div>
              <div>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="">More info</a>
              </div>
            </li>
          ))}
        </ul>
        <form
          className="form"
          onSubmit={this.submitHandler}
        >
          <p>Add new user</p>
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
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}