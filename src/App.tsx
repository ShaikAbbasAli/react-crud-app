// App.tsx
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { User } from './types/User';
import { dummyData } from './Data/dummyData';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(dummyData);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleSaveUser = (user: User) => {
    if (editingUser) {
      // Update existing user
      setUsers((prevUsers) =>
        prevUsers.map((prevUser) => (prevUser.id === editingUser.id ? { ...prevUser, ...user } : prevUser))
      );
      setEditingUser(null);
    } else {
      // Add new user
      setUsers((prevUsers) => [...prevUsers, user]);
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <UserForm onSave={handleSaveUser}  />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;