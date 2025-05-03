import { Typography, Box } from '@mui/material';

export function SalesPage() {
  return (
    <Box p={4}sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Sale Management
      </Typography>
      <Typography variant="body1">
        Here you can manage sales records, invoices and transactions.
      </Typography>
    </Box>
  );
}
