import { Typography, Box } from '@mui/material';

export function SalesPage() {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Sale Management
      </Typography>
      <Typography variant="body1">
        Here you can manage sales records, invoices and transactions.
      </Typography>
    </Box>
  );
}
