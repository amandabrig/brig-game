import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Progresso from './pages/Progresso';
import Desafios from './pages/Desafios';
import Registro from './pages/Registro'; // ⬅️ esse import tem que ficar aqui em cima também

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/registro" element={<Registro />} /> {/* ⬅️ adicionando a rota */}
      </Routes>
    </Router>
  );
}

export default App;