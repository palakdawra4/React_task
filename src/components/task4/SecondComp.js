import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from "@mui/material";

const UserTable = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.contact}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => onEditUser(index)}>Edit</Button>
                <Button color="error" onClick={() => onDeleteUser(index)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
