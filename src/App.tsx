import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (


            <><AppBar position="static">
          <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  News
              </Typography>
              <Button color="inherit">Login</Button>
          </Toolbar>
      </AppBar><Container maxWidth="sm">


              <Box sx={{ my: 4 }}>
                  <Typography variant="h4" component="h1" gutterBottom>
                      Material UI Vite.js example in TypeScript
                  </Typography>
                  <ProTip />
                  <Copyright />
              </Box>
          </Container></>
  );
}
