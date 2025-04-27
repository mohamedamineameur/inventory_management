import { Box, Typography, Button, Grid, Paper } from '@mui/material';

export function HomePage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                padding: 3,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    maxWidth: 600,
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Bienvenue dans Inventory Manager
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Gérez vos stocks efficacement et facilement avec notre application.
                </Typography>
                <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
                    <Grid >
                        <Button variant="contained" color="primary">
                            Voir les Produits
                        </Button>
                    </Grid>
                    <Grid >
                        <Button variant="outlined" color="primary">
                            Ajouter un Produit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default HomePage;