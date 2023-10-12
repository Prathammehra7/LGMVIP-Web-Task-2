import React from 'react';

const Users = ({ users }) => {
  return (
    <div className="user-grid">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
