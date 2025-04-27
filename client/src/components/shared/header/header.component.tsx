import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    Avatar,
    Menu,
    MenuItem,
    IconButton
  } from "@mui/material";
  import { Link } from 'react-router-dom';
  import { useAuth } from "../../../contexts/AuthContext";
  import InventoryIcon from '@mui/icons-material/Inventory';
  import { useState } from "react";
    import { useNavigate } from "react-router-dom";
  
  export function Header() {
    const navigate = useNavigate();
    const { me, logout, loading } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = async () => {
      handleMenuClose();
      await logout();
        navigate("/");
    };
  
    if (loading) return null;
  
    return (
      <AppBar position="static" sx={{ backgroundColor: "#1D4E89", boxShadow: 3 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          {/* Logo + Title */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <InventoryIcon sx={{ fontSize: 28 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ letterSpacing: 1 }}>
              Inventory Manager
            </Typography>
          </Stack>
  
          {/* Navigation Links */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              About
            </Button>
  
            {!me ? (
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{ textTransform: 'none', fontWeight: 500 }}
              >
                Login
              </Button>
            ) : (
              <>
                <Typography variant="body2" color="inherit" sx={{ fontWeight: 500 }}>
                  {me.username}
                </Typography>
  
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: "#1976d2", width: 32, height: 32, fontSize: 14 }}>
                    {me.username.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
  
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
  