import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export function ErrorPage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            textAlign="center"
            bgcolor="#f5f5f5"
        >
            <SentimentDissatisfiedIcon color="error" style={{ fontSize: 80 }} />
            <Typography variant="h1" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                The page you are looking for does not exist or has been moved.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoHome}>
                Go to Homepage
            </Button>
        </Box>
    );
}
