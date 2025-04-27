import { Typography, Box } from '@mui/material';

export function CategoriesPage() {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Categories Management
      </Typography>
      <Typography variant="body1">
        Here you can manage product categories and organize your inventory.
      </Typography>
    </Box>
  );
}
