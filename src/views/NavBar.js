import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Navigate } from "react-router-dom";

export default function NavBar() {
  const user = useContext(UserContext);

  function userClickHandle() {
    return <Navigate to="/userOperations" replace={true} />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Todo
          </Typography>
          {user.role === "Admin" && (
            <Button variant="h8" component="div">
              <Link to="/userOperations">User</Link>
            </Button>
          )}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
