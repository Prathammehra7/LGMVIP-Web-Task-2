import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserGrid from './components/Users';
import Loader from './components/Loader';
import {
  NavbarContainer,
  UserGridContainer,
  UserCard,
  LoaderContainer,
} from './style';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onGetUsers={getUsers} />
      <button onClick={getUsers}>Get Users</button>
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <UserGridContainer>
          {users.map((user) => (
            <UserCard key={user.id}>
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
              <h2>{`${user.first_name} ${user.last_name}`}</h2>
              <p>Email: {user.email}</p>
            </UserCard>
          ))}
        </UserGridContainer>
      )}
    </div>
  );
}

export default App;
