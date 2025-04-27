import { Grid, Paper, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from 'react-router-dom';

export function DashboardPage() {
    const navigate = useNavigate();
    const cards = [
        {
            title: 'Users Management',
            icon: <PeopleIcon fontSize="large" color="primary" />,
            color: 'primary.main',
            onClick: () => navigate('/users'),
        },
        {
            title: 'Categories Management',
            icon: <CategoryIcon fontSize="large" color="secondary" />,
            color: 'secondary.main',
            onClick: () => navigate('/categories'),
        },
        {
            title: 'Sale Management',
            icon: <ShoppingCartIcon fontSize="large" color="success" />,
            color: 'success.main',
            onClick: () => navigate('/sales'),
        },
        {
            title: 'Item Management',
            icon: <InventoryIcon fontSize="large" color="warning" />,
            color: 'warning.main',
            onClick: () => navigate('/items'),
        },
    ];

    return (
        <Box sx={{ flexGrow: 1, p: 4, minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: '#2f6e55' }}>
                Inventory Dashboard
            </Typography>

            <Grid container spacing={4} justifyContent="center" alignItems="center" justifyItems={'center'}>
                {cards.map((card, index) => (
                    <Grid key={index} >
                        <Paper
                            onClick={card.onClick}
                            elevation={4}
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                textAlign: 'center',
                                transition: '0.3s',
                                cursor: 'pointer',
                                backgroundColor: '#fff',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: 6,
                                },
                                width: 300,
                                height: 200,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box sx={{ mb: 2 }}>{card.icon}</Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {card.title}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
