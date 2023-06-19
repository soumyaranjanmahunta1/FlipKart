import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <div >
      <Header />
      <Box sx={{marginTop:"54px"}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
