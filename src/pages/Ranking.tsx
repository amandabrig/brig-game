import React from 'react';
import { useNavigate } from 'react-router-dom';

function Ranking() {
  const navigate = useNavigate();
  const rankingData = [
    { nome: 'Amanda', usuario: '@amandabrig', xp: 850, foto: '/aluno1.png' },
    { nome: 'Luana', usuario: '@luana_doces', xp: 720, foto: '/aluno2.png' },
    { nome: 'Carlos', usuario: '@carlos.brig', xp: 690, foto: '/aluno3.png' },
    { nome: 'Beatriz', usuario: '@bia_confeita', xp: 620, foto: '/aluno4.png' },
    { nome: 'Patrícia', usuario: '@pattydoces', xp: 580, foto: '/aluno5.png' },
  ];

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Ranking Semanal</h1>
      <ul style={listStyle}>
        {rankingData.map((aluno, index) => (
          <li key={index} style={itemStyle}>
            <div style={posicaoStyle}>{index + 1}º</div>
            <img src={aluno.foto} alt={aluno.nome} style={fotoStyle} />
            <div
              onClick={() => navigate(`/perfil/${aluno.usuario.replace('@', '')}`)}
              style={nomeClickStyle}
            >
              <strong>{aluno.nome}</strong>
              <div style={usuarioStyle}>{aluno.usuario}</div>
            </div>
            <div style={xpStyle}>{aluno.xp} XP</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const pageStyle = {
  backgroundColor: '#F5F0EB',
  minHeight: '100vh',
  padding: '32px',
  fontFamily: 'sans-serif',
  color: '#5C4A35'
};

const titleStyle = {
  fontSize: '28px',
  textAlign: 'center',
  marginBottom: '24px'
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FFF',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  justifyContent: 'space-between'
};

const posicaoStyle = {
  fontSize: '18px',
  width: '40px',
  fontWeight: 600
};

const fotoStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  marginRight: '16px'
};

const usuarioStyle = {
  fontSize: '14px',
  color: '#8A7660'
};

const xpStyle = {
  fontSize: '16px',
  fontWeight: 600
};

const nomeClickStyle = {
  cursor: 'pointer',
  textAlign: 'left'
};

export default Ranking;