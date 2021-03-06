import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ picker }) {
  // console.log(picker);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {picker.length !== 0
            ? picker.map((item) => (
                <TableRow
                  key={item.firstName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.firstName}
                  </TableCell>
                  <TableCell>{item.lastName}</TableCell>
                  <TableCell>{item.id}</TableCell>
                </TableRow>
              ))
            : "No matching data"}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
