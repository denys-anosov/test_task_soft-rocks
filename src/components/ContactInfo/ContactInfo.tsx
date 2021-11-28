import React from "react";

interface Props {
  currentUser: User,
}

interface State {
  id: number,
  name: string,
  username?: string,
  email: string,
  phone?: string,
  website?: string,
}

export class ContactInfo extends React.Component<Props, State> {
  state = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  }

  componentDidMount() {
    if (this.props.currentUser.id) {
      const {
        id,
        name,
        username,
        email,
        phone,
        website,
      } = this.props.currentUser

      this.setState({ id, name, username, email, phone, website });
    }
  }

  render() {
    const {
      id,
      name,
      username,
      email,
      phone,
      website,
    } = this.state

    return (
      <>
        {id ? (
          <ul>
            <li>Name: {name}</li>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Website: {website}</li>
          </ul>
        ) : (
          <span>Oops, something went wrong...</span>
        )}
      </>
    );
  }
}