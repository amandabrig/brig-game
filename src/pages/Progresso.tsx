import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

function Progresso() {
  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Progresso</h1>
      <p style={textStyle}>Acompanhe seu avanço no Brig Game!</p>
      <Link to="/desafios">
        <button className={styles.button}>Ir para Desafios</button>
      </Link>
    </div>
  );
}

// Estilos inline
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

export default Progresso;