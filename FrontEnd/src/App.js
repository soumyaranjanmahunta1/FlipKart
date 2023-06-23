import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './Context/DataProvider';
import "../src/App.css"
function App() {
  return (
    <DataProvider >
      <Header />
      <Box sx={{marginTop:"54px"}}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
