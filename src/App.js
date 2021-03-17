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
            <div className='radio-buttons'>
              <div>
                <label htmlFor="student">Student</label>
                <input 
                type='radio'
                value='student' 
                checked={staff === 'student'}
                onChange={(event)=> setStaff(event.target.value)}
                />
                <label htmlFor="staff">Staff</label>
                <input 
                type='radio'
                value='instructor' 
                checked={staff === 'instructor'}
                onChange={(event)=> setStaff(event.target.value)}
                />
              </div>
            </div>
            <label htmlFor='bio'>Bio</label>
            <input 
            style={{ padding: 30}}
            onChange={(event)=> setBio(event.target.value)}
            type='textarea' 
            value={bio}
            />
            <label htmlFor='notifications'>Email Notifications</label>
            <input 
              type='checkbox'
              value={notifications}
              checked={notifications === 'true'}
              onChange={(event)=> setNotifications(event.target.value)}
            />
          </div>
        </form>

    </div>
  );
}

export default App;
