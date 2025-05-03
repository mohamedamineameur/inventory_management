import { Typography, Box } from '@mui/material';

export function CategoriesPage() {
  return (
    <Box p={4} sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Categories Management
      </Typography>
      <Typography variant="body1">
        Here you can manage product categories and organize your inventory.
      </Typography>
    </Box>
  );
}
