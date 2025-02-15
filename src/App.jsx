import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, TextField } from '@mui/material';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <header className="header">
          <div className="header__container">
            <div className="header-title">
              <h2>Settings</h2>
              <SettingsIcon style={{ fontSize: 28, marginLeft: 8 }} />
            </div>
            <div className="header-icons">
              <Button variant="outlined">Search here</Button>
            </div>
          </div>
        </header>

        <div className="buttons">
          <Button  variant="contained" color="primary" sx={{ backgroundColor: 'white', color: 'black'}}>
            Messages
          </Button>
          <Button variant="contained" color="secondary" sx={{ backgroundColor: 'white', color: 'black'}}>
            Social
          </Button>
          <Button variant="contained" color="warning" sx={{ backgroundColor: 'white', color: 'black'}}>
            Notifications
          </Button>
          <Button variant="contained" color="info" sx={{ backgroundColor: 'white', color: 'black'}}>
            Backup
          </Button>
        </div>
        <div className="cards">
          <h2>Basic Info</h2>
          <form className="form">
            <div className="input-group">
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </div>
            <div className="input-group">
              <TextField
                label="Middle Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Birth Date"
                variant="outlined"
                fullWidth
                type="date"
                margin="normal"
              />
            </div>
          </form>
          <div>
            <TextField
              label="Language"
              variant="outlined"
              sx={{ marginTop: '29px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
