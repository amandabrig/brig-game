import React from 'react';
import { useNavigate } from 'react-router-dom';

function PerfilAluno() {
  const navigate = useNavigate();

  return (
    <div style={pageStyle}>
      <div style={topoStyle}>
        <img
          src="/foto-aluno.png"
          alt="Foto do aluno"
          style={fotoStyle}
        />
        <div>
          <h2 style={nomeStyle}>Nome do Aluno</h2>
          <p style={instaStyle}>@usuario</p>
          <p style={pontuacaoStyle}>350 XP</p>
        </div>
      </div>

      <button onClick={() => navigate('/registro')} style={editButtonStyle}>
        Editar Perfil
      </button>

      <div style={secaoStyle}>
        <h3 style={tituloSecao}>Cursos realizados</h3>
        <ul style={listaCursos}>
          <li style={itemCurso}>✅ Brig Game</li>
          <li style={itemCurso}>✅ Curso de Brigadeiros Coloridos</li>
        </ul>
      </div>

      <div style={secaoStyle}>
        <h3 style={tituloSecao}>Conquistas</h3>
        <div style={conquistasStyle}>
          <img src="/badge1.png" alt="Conquista 1" style={badgeStyle} />
          <img src="/badge2.png" alt="Conquista 2" style={badgeStyle} />
          <img src="/badge3.png" alt="Conquista 3" style={badgeStyle} />
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  backgroundColor: '#F5F0EB',
  padding: '32px',
  fontFamily: 'sans-serif',
  color: '#5C4A35',
  maxWidth: '600px',
  margin: '0 auto',
  minHeight: '100vh'
};

const topoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '24px'
};

const fotoStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover' as React.CSSProperties['objectFit']
  };

const nomeStyle = {
  margin: '0',
  fontSize: '22px'
};

const instaStyle = {
  margin: '0',
  fontSize: '16px',
  color: '#8A7660'
};

const pontuacaoStyle = {
  fontSize: '16px',
  marginTop: '4px'
};

const editButtonStyle = {
  backgroundColor: '#7A6855',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  marginBottom: '24px'
};

const secaoStyle = {
  marginBottom: '24px'
};

const tituloSecao = {
  fontSize: '18px',
  marginBottom: '12px'
};

const listaCursos = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const itemCurso = {
  marginBottom: '8px'
};

const conquistasStyle = {
  display: 'flex',
  gap: '16px'
};

const badgeStyle = {
  width: '48px',
  height: '48px'
};

export default PerfilAluno;