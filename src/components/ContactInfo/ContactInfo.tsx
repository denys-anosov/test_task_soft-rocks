import React from "react";
import { Link } from 'react-router-dom';
import './ContactInfo.scss'

interface Props {
  currentUser: User,
}

export const ContactInfo: React.FC<Props> = ({ currentUser }) => { // receives selected user from App/state/currentUser through props
  const { id, name, username, email, phone, website } = currentUser;
  return (
    <>
      {id ? ( // renders details of the selected user if id is present
        <div>
          <ul className="ContactInfo__list">
            <li>Name: {name}</li>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Website: {website}</li>
          </ul>
        </div>
      ) : ( // if no id - provides an error message, also when page is refreshed as props are lost and no user selected
        <div
          className="ContactInfo__error"
        >
          Oops, something went wrong...
        </div>
      )}
      <button // button with a link to redirect to the home page
        className="ContactInfo__button"
        type="button"
      >
        <Link
          className="ContactInfo__button--link"
          to="/"
        >
          Go back
        </Link>
      </button>
    </>
  );

}