import React, { useState, useEffect } from "react";
import UserForm from "./FirstComp";
import UserTable from "./SecondComp";

const Task4 = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (index) => {
    const name = prompt("Enter new name", users[index].name);
    const age = prompt("Enter new age", users[index].age);
    const contact = prompt("Enter new contact", users[index].contact);
    
    if (name && age && contact) {
      const updatedUsers = [...users];
      updatedUsers[index] = { name, age, contact };
      setUsers(updatedUsers);
    }
  };

  const deleteUser = (index) => {
    const updatedUsers = users.slice(); 
    updatedUsers.splice(index, 1); 

    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Task 4: User Management</h2>
      <UserForm onAddUser={addUser} />
      <UserTable users={users} onEditUser={editUser} onDeleteUser={deleteUser} />
    </div>
  );
};

export default Task4;
