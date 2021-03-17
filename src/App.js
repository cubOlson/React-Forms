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
            <input 
            onChange={(event)=> setName(event.target.value)}
            type='text' 
            value={name} 
            />
            <label htmlFor="email">Email</label>
            <input 
            onChange={(event)=> setEmail(event.target.value)}
            type="text"
            value={email}
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
            onChange={(event)=> setPhoneNumber(event.target.value)}
            type="tel"
            value={phoneNumber}
            />
            <div>
              <label htmlFor="staff">Staff</label>
              
            </div>
          </div>
        </form>

    </div>
  );
}

export default App;
