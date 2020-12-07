import React from 'react';
import withLoader from '../HOC/withLoader';
import { UserCard } from '../Molecules/UserCard';


const UserGrid = ({ users }) => {
  return (
    <div className="ed-grid m-grid-4">
      { users.map((u) => (
          <UserCard
            key={u.id}
            name={u.name}
            username={u.name}
            email={u.email}
          />
        ))
      }
    </div>
  
  )
};

export default  withLoader("users")(UserGrid) 
