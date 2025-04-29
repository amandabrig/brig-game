import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Progresso from './pages/Progresso';
import Desafios from './pages/Desafios';
import Registro from './pages/Registro';
import Ranking from './pages/Ranking';
import PerfilDinamico from './pages/PerfilDinamico';
import PerfilAluno from './pages/PerfilAluno';
import AdminDesafios from './pages/AdminDesafios';
import ResponderDesafio from './pages/ResponderDesafio';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/admin');

  return (
    <div style={{ paddingBottom: hideNav ? 0 : '60px' }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/perfil" element={<PerfilAluno />} />
        <Route path="/perfil/:id" element={<PerfilDinamico />} />
        <Route path="/admin/desafios" element={<AdminDesafios />} />
        <Route path="/responder-desafio" element={<ResponderDesafio />} />
      </Routes>
      {!hideNav && <BottomNav />}
    </div>
  );
}

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav style={navStyle}>
      <button
        onClick={() => navigate('/desafios')}
        style={location.pathname === '/desafios' ? navButtonActive : navButtonStyle}
      >📋</button>
      <button
        onClick={() => navigate('/ranking')}
        style={location.pathname === '/ranking' ? navButtonActive : navButtonStyle}
      >🏆</button>
      <button
        onClick={() => navigate('/perfil')}
        style={location.pathname === '/perfil' ? navButtonActive : navButtonStyle}
      >👤</button>
    </nav>
  );
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '60px',
  backgroundColor: '#fff',
  borderTop: '1px solid #ccc',
};

const navButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  color: '#7A6855',
  cursor: 'pointer',
};

const navButtonActive: React.CSSProperties = {
  ...navButtonStyle,
  color: '#000',
  fontWeight: 'bold',
};

export default AppWrapper;