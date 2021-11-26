import React from 'react';
import { ContactList } from './components/ContactList/ContactList';


const App:React.FC<{}> = () => {
  return (
    <main className="App">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">
        Page 1
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">
        Page 2
      </a>
      <ContactList />
    </main>
  );
}

export default App;
