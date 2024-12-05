import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './navbar/Navbar';
import NotHome from './pages/NotHome';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/NotHome' element={<NotHome />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
