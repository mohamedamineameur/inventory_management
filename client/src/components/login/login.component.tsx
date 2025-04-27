import { Container, Paper, Typography, TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { userService } from "../../services/user.service";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { extractApiErrorMessage } from "../../utils/handle-api-error";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [hiden, setHiden] = useState(true);

    const handlePasswordVisibility = () => {
        setHiden(!hiden);
    };
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        let response;
        try {
        response = await userService().login(username, password);
        console.log(response.data);
        } catch (err: unknown) {
            setError(extractApiErrorMessage(err));
          }
    };
    
    return (
        <Container maxWidth="xs" sx={{ mt: 8, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography variant="h5" component="h1" gutterBottom>
            Login
            </Typography>
            <form onSubmit={handleLogin}>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                variant="outlined"
                type={hiden ? "password" : "text"}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <Box onClick={handlePasswordVisibility} sx={{ cursor: 'pointer' }}>
                            {hiden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Box>
                    ),
                }}
            />
            <Box textAlign="center">
                <Button variant="contained" color="primary" type="submit">
                Login
                </Button>
            </Box>
            {error &&
            <Box textAlign="center" mt={2}>
             <Typography color="error">{error}</Typography>
            </Box>
            }

            </form>
        </Paper>
        </Container>
    );
    }