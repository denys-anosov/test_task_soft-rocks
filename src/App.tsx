import React from 'react';
import { ContactList } from './components/ContactList/ContactList';


const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;
