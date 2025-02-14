import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

function App() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="container">
        <HomeIcon />
        <a href="#">Pages</a>
        <a href="#">Account</a>
        <a href="#">Settings</a>
        <DehazeIcon />
        <AccountCircleIcon />
        <SettingsIcon />

        <Card sx={{ minWidth: 302, mt: 2, p: 2, gap: '32px' }}>
          <h2>Basic Info</h2>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="o  utlined"
          />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontSize: '14px',
                fontWeight: 400,
                mb: '25px',
              }}
            >
              Profile
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: '#344767',
                fontSize: '14px',
                fontWeight: 400,
                mt: 2.5,
              }}
            >
              Basic Info
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Change Password
            </Typography>
            <Typography variant="body2" sx={{ color: '#344767' }}>
              2FA
              <br />
              {'"Accounts"'}
            </Typography>
            <Typography
              sx={{ color: '#344767', fontSize: '14px', fontWeight: 400 }}
            >
              Notifications
            </Typography>
            <Typography
              sx={{ color: '#344767', fontSize: '14px', fontWeight: 400 }}
            >
              Sessions
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              variant="body2"
              sx={{ color: '#344767', fontSize: '14px', fontWeight: 400 }}
            >
              Delete Account
            </Typography>
          </CardActions>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl wu>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Card>
      </div>
    </div>
  );
}

export default App;
