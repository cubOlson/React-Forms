import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [notifications, setNotifications] = useState('');
  return (
    <div>
      <h1>Hello from App</h1>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' />
          </div>
        </form>

    </div>
  );
}

export default App;
