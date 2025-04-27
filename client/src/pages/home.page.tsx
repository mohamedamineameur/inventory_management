import {
    Box,
    Typography,
    Button,
    Grid,
    Paper,
    Stack,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
  import InventoryIcon from '@mui/icons-material/Inventory';
  import CategoryIcon from '@mui/icons-material/Category';
  import PeopleIcon from '@mui/icons-material/People';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  
  export function HomePage() {
    const features = [
      {
        icon: <InventoryIcon sx={{ fontSize: 40, color: '#1D4E89' }} />,
        title: 'Item & Stock Management',
        description:
          'Add, edit, and monitor products with real-time quantity tracking through Quantity and SaleItem associations.',
      },
      {
        icon: <CategoryIcon sx={{ fontSize: 40, color: '#7B1FA2' }} />,
        title: 'Category Management',
        description:
          'Group your products using categories to keep your inventory organized and easy to browse.',
      },
      {
        icon: <ShoppingCartIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
        title: 'Sales Tracking',
        description:
          'Register sales, track which user sold what, and monitor sale items per transaction — fully relational and efficient.',
      },
      {
        icon: <PeopleIcon sx={{ fontSize: 40, color: '#F57C00' }} />,
        title: 'User Roles',
        description:
          'Allow multiple users to interact with the system and track sales per user to ensure accountability.',
      },
    ];
  
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          py: 8,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box maxWidth="lg" width="100%">
          {/* Intro section */}
          <Stack spacing={2} textAlign="center" mb={6}>
            <Typography variant="h2" fontWeight="bold" color="#1D4E89">
              Welcome to Inventory Manager
            </Typography>
            <Typography variant="h6" color="text.secondary" textAlign={'justify'}>
              A full-featured inventory and sales management system designed to help businesses
              organize their products, categories, stock levels, sales, and user responsibilities
              efficiently and professionally.
            </Typography>
          </Stack>
  
          {/* Feature cards */}
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid  key={index}>
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 3,
                    width: 400,
                  }}
                >
                  <CardHeader
                    avatar={feature.icon}
                    title={
                      <Typography variant="h6" fontWeight="bold" color="text.primary">
                        {feature.title}
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
  
          {/* CTA buttons */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={3}
            mt={6}
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              size="large"
              href="/login"
              sx={{ backgroundColor: '#1D4E89' }}
            >
              Get Started
            </Button>
            <Button variant="outlined" size="large" href="/about">
              Learn More
            </Button>
          </Stack>
        </Box>
      </Box>
    );
  }
  
  export default HomePage;
  