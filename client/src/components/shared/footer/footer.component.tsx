import { Box, Typography, Link, Container, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1D4E89',
        color: 'white',
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Inventory Manager
          </Typography>

          <Typography variant="body2" align="center" maxWidth={600}>
            This application was built by <strong>Mohamed Amine Ameur</strong> as a full-stack showcase project.
            It demonstrates inventory and user management using modern web technologies like React, Express.js, Vite, and SQLite.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link
              href="https://www.linkedin.com/in/ameur-mohamed-amine/"
              target="_blank"
              color="inherit"
              underline="hover"
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <LinkedInIcon fontSize="small" />
                <span>LinkedIn</span>
              </Stack>
            </Link>

            <Link
              href="https://github.com/mohamedamineameur"
              target="_blank"
              color="inherit"
              underline="hover"
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <GitHubIcon fontSize="small" />
                <span>GitHub</span>
              </Stack>
            </Link>

            <Link
              href="/about"
              color="inherit"
              underline="hover"
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <CodeIcon fontSize="small" />
                <span>About This App</span>
              </Stack>
            </Link>
          </Stack>

          <Typography variant="caption" align="center" color="gray" mt={2}>
            © {new Date().getFullYear()} Mohamed Amine Ameur. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
