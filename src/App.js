import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [staff, setStaff] = useState('student');
  const [bio, setBio] = useState('');
  const [notifications, setNotifications] = useState()
  return (
    <h1>Hello from App</h1>
  );
}

export default App;
