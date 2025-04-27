import {
    Container,
    Paper,
    Typography,
    TextField,
    Box,
    Button,
    InputAdornment,
    IconButton
  } from "@mui/material";
  import { useState } from "react";
  import { useAuth } from "../../contexts/AuthContext";
  import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  import { extractApiErrorMessage } from "../../utils/handle-api-error";
  import { useNavigate } from "react-router-dom";
  
  export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [hiden, setHiden] = useState(true);
    const { login } = useAuth();
    const navigate = useNavigate();
  
    const handlePasswordVisibility = () => setHiden((prev) => !prev);
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await login(username, password);
        navigate("/");
      } catch (err: unknown) {
        setError(extractApiErrorMessage(err));
      }
    };
  
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f0f4f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Container maxWidth="xs">
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: 40, color: '#1D4E89', mb: 1 }} />
            <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
              Sign In
            </Typography>
  
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Access your dashboard and manage your inventory
            </Typography>
  
            <form onSubmit={handleLogin}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type={hiden ? "password" : "text"}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility} edge="end">
                        {hiden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
  
              {error && (
                <Typography color="error" variant="body2" mt={1}>
                  {error}
                </Typography>
              )}
  
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    );
  }
  