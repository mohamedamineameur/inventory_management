
import { Box, Typography, Link, Container } from '@mui/material';

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 3,
                mt: 4,
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} My Company. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                    <Link href="/privacy-policy" color="inherit" underline="hover">
                        Privacy Policy
                    </Link>{' '}
                    |{' '}
                    <Link href="/terms-of-service" color="inherit" underline="hover">
                        Terms of Service
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

