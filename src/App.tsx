import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Progresso from './pages/Progresso';
import Desafios from './pages/Desafios';
import Registro from './pages/Registro';
import Ranking from './pages/Ranking'; // ✅ novo import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ranking" element={<Ranking />} /> {/* ✅ nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
import PerfilDinamico from './pages/PerfilDinamico';

<Route path="/perfil/:id" element={<PerfilDinamico />} />
