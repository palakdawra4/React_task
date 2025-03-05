import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const handleAdd = () => {
    if (name && age && contact) {
      onAddUser({ name, age, contact });
      setName("");
      setAge("");
      setContact("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <TextField label="Contact No" value={contact} onChange={(e) => setContact(e.target.value)} />
      <Button variant="contained" onClick={handleAdd}>Add</Button>
    </Box>
  );
};

export default UserForm;
