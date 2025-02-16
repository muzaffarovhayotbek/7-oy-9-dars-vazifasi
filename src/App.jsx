import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import imageProfilepic from './assets/image-profilepic.png';
import {
  Button,
  TextField,
  Avatar,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Paper,
  Typography,
  ButtonGroup,
} from '@mui/material';
// import './App.css';
function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
        mb: 6,
      }}
    >
      <Typography variant="h4">Settings</Typography>
      <SettingsIcon />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200,
          gap: '20px',
        }}
      >
        <Button sx={{ fontSize: '16px', color: '#344767' }}>Messages</Button>
        <Button sx={{ fontSize: '16px', color: '#344767' }}>Social</Button>
        <Button sx={{ fontSize: '16px', color: '#344767' }}>
          Notifications
        </Button>
        <Button sx={{ fontSize: '16px', color: '#344767' }}>Backup</Button>
      </Box>

      <Box
        sx={{ display: 'flex', mt: 5, gap: 3, width: '100%', maxWidth: 1200 }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '302px',
            pt: '24px',
            pl: '32px',
            pr: '32px',
            pb: '25px',
            boxShadow: '0px 2px 6px 0px #00000040',
          }}
        >
          <ButtonGroup orientation="vertical" fullWidth>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              Profile
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              Basic Info
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              Change Password
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              2FA
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              Accounts
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              Notifications
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              Sessions
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#344767', pt: '25px' }}>
              Delete Account
            </Typography>
          </ButtonGroup>
        </Paper>

        <Box sx={{ flexGrow: 1 }}>
          <Paper
            elevation={3}
            sx={{ p: 3, display: 'flex', alignItems: 'center', mb: 3 }}
          >
            <Avatar
              src={imageProfilepic}
              alt="Profile Picture"
              sx={{ width: 80, height: 80, mr: 2 }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: '20px', color: '#344767', pb: '4px' }}
              >
                Richard Davis
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '14px', color: '#344767' }}
              >
                CEO / Co-Founder
              </Typography>
            </Box>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 12,
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontSize: '20px', color: '#344767', pb: '34px' }}
            >
              Basic Info
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="First Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Last Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>I’m</InputLabel>
                  <Select>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Birth Date"
                  variant="outlined"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Confirm Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Your Location" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Phone Number" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
