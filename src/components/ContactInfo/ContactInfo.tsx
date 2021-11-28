import React from "react";

interface Props {
  currentUser: User,
}

export class ContactInfo extends React.Component<Props> {
  render() {
    const {
      id,
      name,
      username,
      email,
      phone,
      website,
    } = this.props.currentUser

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