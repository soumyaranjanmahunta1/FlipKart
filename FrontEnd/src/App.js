import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './Context/DataProvider';
import "../src/App.css"
import DetailView from './Components/Details/DetailView';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box sx={{ marginTop: "54px" }}>
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/product/:id" element={ <DetailView/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
