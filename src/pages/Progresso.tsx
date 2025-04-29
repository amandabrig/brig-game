import React from 'react';
import styles from '../styles/Button.module.css';

function PerfilAluno() {
  return (
    <div style={pageStyle}>
      <div style={topoStyle}>
        <img
          src="/foto-aluno.png" // Substituir pela URL real ou estado de perfil
          alt="Foto do aluno"
          style={fotoStyle}
        />
        <div>
          <h2 style={nomeStyle}>Nome do Aluno</h2>
          <p style={instaStyle}>@usuario</p>
          <p style={pontuacaoStyle}>350 XP</p>
        </div>
      </div>

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

const pageStyle: React.CSSProperties = {
  backgroundColor: '#F5F0EB',
  padding: '32px',
  fontFamily: 'sans-serif',
  color: '#5C4A35',
  maxWidth: '400px',
  margin: '0 auto',
};

const topoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '24px',
};

const fotoStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const nomeStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '22px',
};

const instaStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '16px',
  color: '#8A7660',
};

const pontuacaoStyle: React.CSSProperties = {
  fontSize: '16px',
  marginTop: '4px',
};

const secaoStyle: React.CSSProperties = {
  marginTop: '24px',
};

const tituloSecao: React.CSSProperties = {
  fontSize: '18px',
  marginBottom: '12px',
};

const listaCursos: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const itemCurso: React.CSSProperties = {
  marginBottom: '8px',
};

const conquistasStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
};

const badgeStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
};

export default PerfilAluno;
