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

  const hideNav =
    location.pathname === '/' ||
    location.pathname === '/registro' ||
    location.pathname.startsWith('/admin');

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
      <div onClick={() => navigate('/desafios')} style={navItemStyle}>
        <span style={location.pathname === '/desafios' ? navIconActive : navIcon}>📋</span>
        <span style={location.pathname === '/desafios' ? navLabelActive : navLabel}>Desafios</span>
      </div>
      <div onClick={() => navigate('/ranking')} style={navItemStyle}>
        <span style={location.pathname === '/ranking' ? navIconActive : navIcon}>🏆</span>
        <span style={location.pathname === '/ranking' ? navLabelActive : navLabel}>Ranking</span>
      </div>
      <div onClick={() => navigate('/perfil')} style={navItemStyle}>
        <span style={location.pathname === '/perfil' ? navIconActive : navIcon}>👤</span>
        <span style={location.pathname === '/perfil' ? navLabelActive : navLabel}>Perfil</span>
      </div>
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
  fontFamily: 'sans-serif',
};

const navItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  cursor: 'pointer',
};

const navIcon: React.CSSProperties = {
  fontSize: '20px',
  color: '#7A6855',
};

const navIconActive: React.CSSProperties = {
  ...navIcon,
  color: '#000',
};

const navLabel: React.CSSProperties = {
  fontSize: '12px',
  color: '#7A6855',
  marginTop: '2px',
};

const navLabelActive: React.CSSProperties = {
  ...navLabel,
  fontWeight: 'bold',
  color: '#000',
};

export default AppWrapper;