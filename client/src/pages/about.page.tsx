import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
    Stack,
    Chip,
    Divider
  } from '@mui/material';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import InventoryIcon from '@mui/icons-material/Inventory';
  import CodeIcon from '@mui/icons-material/Code';
  import WebIcon from '@mui/icons-material/Web';
  import StorageIcon from '@mui/icons-material/Storage';
  
  export function AboutPage() {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f0f2f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 6,
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={6} sx={{ p: 5, borderRadius: 4 }}>
            <Stack spacing={4} alignItems="center" textAlign="center">
              <InventoryIcon sx={{ fontSize: 60, color: '#1976d2' }} />
  
              <Typography variant="h3" fontWeight="bold" color="primary">
                About This Project
              </Typography>
  
              <Typography variant="body1" sx={{ fontSize: 18, textAlign:'justify' }}>
                This <strong>Inventory Management Application</strong> was built to demonstrate my full-stack development skills and software design approach. It features user, product, sales and category management in an intuitive interface.
              </Typography>
  
              <Divider sx={{ width: '100%' }}>Technologies Used</Divider>
  
              <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                <Chip icon={<WebIcon />} label="React.js + Vite" color="primary" />
                <Chip icon={<CodeIcon />} label="TypeScript" color="secondary" />
                <Chip icon={<StorageIcon />} label="SQLite3" color="success" />
                <Chip icon={<CodeIcon />} label="Express.js" color="warning" />
                <Chip icon={<WebIcon />} label="MUI (Material UI)" color="info" />
                <Chip icon={<StorageIcon />} label="REST API" color="default" />
              </Stack>
  
              <Divider sx={{ width: '100%' }}>About Me</Divider>
  
              <Typography variant="body1" sx={{ fontSize: 18, textAlign:'justify' }}>
                I'm <strong>Mohamed Amine Ameur</strong>, a passionate full-stack developer based in Canada. I designed and coded this project from scratch to showcase my ability to deliver clean, maintainable and scalable solutions.
              </Typography>
  
              <Typography variant="body2" color="text.secondary">
                Let’s connect and collaborate!
              </Typography>
  
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/ameur-mohamed-amine/"
                  target="_blank"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/mohamedamineameur"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Container>
      </Box>
    );
  }
  