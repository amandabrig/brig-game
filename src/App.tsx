import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Progresso from './pages/Progresso';
import Desafios from './pages/Desafios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/desafios" element={<Desafios />} />
      </Routes>
    </Router>
  );
}

export default App;