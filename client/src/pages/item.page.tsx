import { Typography, Box } from '@mui/material';

export function ItemsPage() {
  return (
    <Box p={4}sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Item Management
      </Typography>
      <Typography variant="body1">
        Here you can manage individual inventory items and stock levels.
      </Typography>
    </Box>
  );
}
