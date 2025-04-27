import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { useAuth } from "../../../contexts/AuthContext";


export function Header() {
  const { me, logout, loading } = useAuth();
 

  if (loading) return null;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Inventory Management</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {!me && (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          )}
          {me && (
            <>
              <Button color="inherit" component={Link} to="/profile">Profile</Button>
              <Button color="inherit" onClick={async () => await logout()} component={Link} to="/login">Logout</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
