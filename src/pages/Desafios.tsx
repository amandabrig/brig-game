import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

function Desafios() {
  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Desafios</h1>
      <p style={textStyle}>Complete missões para ganhar pontos no Brig Game!</p>
      <Link to="/progresso">
        <button className={styles.button}>Voltar para Progresso</button>
      </Link>
    </div>
  );
}

// Estilos inline para centralizar e deixar bonito
const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#F5F0EB',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyle: React.CSSProperties = {
  color: '#7A6855',
  marginBottom: '12px',
  fontSize: '32px',
};

const textStyle: React.CSSProperties = {
  color: '#7A6855',
  marginBottom: '24px',
  fontSize: '18px',
};

export default Desafios;
