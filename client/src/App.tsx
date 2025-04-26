
import { Container, Typography, Button, Box } from '@mui/material';

export function App() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4, height: '100vh' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Bienvenue sur l'application d'inventaire
      </Typography>
      <Typography variant="body1" gutterBottom>
        Gérez facilement vos stocks et suivez vos produits en temps réel.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Commencer
        </Button>
        <Button variant="outlined" color="secondary">
          En savoir plus
        </Button>
      </Box>
    </Container>
  );
};

