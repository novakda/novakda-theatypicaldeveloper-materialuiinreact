// import logo from './logo.svg';
// import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Button variant="contained" disabled={false}
      onClick={() => {
        alert ('hello world')
      }}>First</Button>             
    </div>
  );
}

export default App;
