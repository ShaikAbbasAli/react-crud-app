// components/User.tsx
import React from 'react';
import { User } from '../types/User';

interface UserProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserComponent: React.FC<UserProps> = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={() => onEdit(user)}>Edit</button>
      </td>
      <td>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UserComponent;