// components/UserForm.tsx
import React, { useState } from 'react';
import { User } from '../types/User';

interface UserFormProps {
  onSave: (user: User) => void;
  userToEdit?: User; // Optional prop for editing user data
}

const UserForm: React.FC<UserFormProps> = ({ onSave, userToEdit }) => {
  const [name, setName] = useState(userToEdit ? userToEdit.name : '');
  const [email, setEmail] = useState(userToEdit ? userToEdit.email : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newUser: User = {
      id: userToEdit ? userToEdit.id : Date.now(),
      name,
      email,
    };

    onSave(newUser);

    // Reset the form
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">{userToEdit ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;