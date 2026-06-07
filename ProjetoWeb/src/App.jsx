import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;