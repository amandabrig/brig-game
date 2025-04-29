import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

function Login() {
  return (
    <div style={pageStyle}>
      <img src="/brig-game-logo.png" alt="Logo Brig Game" style={logoStyle} />

      <h1 style={titleStyle}>Bem-vindo ao Brig Game</h1>

      <form style={formStyle}>
        <input type="email" placeholder="E-mail" style={inputStyle} />
        <input type="password" placeholder="Senha" style={inputStyle} />
        <button type="submit" className={styles.button}>Entrar</button>
      </form>

      <p style={textStyle}>ou</p>

      <button className={styles.button}>Entrar com Google</button>

      <p style={smallTextStyle}>
        Não tem conta? <Link to="/registro" style={{ color: '#7A6855' }}>Criar Conta</Link>
      </p>
    </div>
  );
}

// Estilos
const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#F5F0EB',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const logoStyle: React.CSSProperties = {
  width: '150px',
  marginBottom: '20px',
};

const titleStyle: React.CSSProperties = {
  color: '#7A6855',
  marginBottom: '12px',
  fontSize: '28px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '300px',
  marginBottom: '20px',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  marginBottom: '12px',
  borderRadius: '8px',
  border: '1px solid #C2B6A3',
  fontSize: '16px',
};

const textStyle: React.CSSProperties = {
  color: '#7A6855',
  marginBottom: '12px',
};

const smallTextStyle: React.CSSProperties = {
  color: '#7A6855',
  fontSize: '14px',
};

export default Login;