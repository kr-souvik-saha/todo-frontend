import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBar from "./NavBar";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { allUsers } from "../Apis/usersApi";

export default function UserOperations() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetch() {
      const response = await allUsers();
      if (response.message === "Ok") {
        setUsers(response.data);
      }
    }
    fetch();
  }, []);
  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell align="right">Email id</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Password Reset</TableCell>
                <TableCell align="right">Is Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.userName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.userName}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">
                    {user.passReset ? "Set" : "Notset"}
                  </TableCell>
                  <TableCell align="right">
                    {user.isActive ? "Active" : "Inactive"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
