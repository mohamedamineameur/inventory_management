import { Typography, Box } from '@mui/material';

export function UsersPage() {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Users Management
      </Typography>
      <Typography variant="body1">
        Here you can manage users: add, edit, delete and assign roles.
      </Typography>
    </Box>
  );
}
