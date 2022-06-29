import React, { useState } from 'react';

const UserList = props => {
  return (
    <div style={{ background: 'teal' }}>
      <ul>
        {props.userField.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
