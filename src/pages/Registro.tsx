import React, { useState } from 'react';
import styles from '../styles/Button.module.css';

function Registro() {
  const [foto, setFoto] = useState<File | null>(null);
  const email = "aluno@briggame.com"; // Exemplo fixo

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(e.target.files[0]);
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Criar Conta</h1>

      <form style={formStyle}>
        <input type="text" placeholder="Nome completo" style={inputStyle} required />

        <input type="file" accept="image/*" onChange={handleFotoChange} style={inputStyle} />

        <input type="text" placeholder="@ do Instagram" style={inputStyle} />

        <input type="email" value={email} style={inputStyle} disabled />

        <input type="password" placeholder="Senha" style={inputStyle} required />
        <input type="password" placeholder="Confirmar senha" style={inputStyle} required />

        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#F5F0EB',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const titleStyle: React.CSSProperties = {
  color: '#7A6855',
  marginBottom: '20px',
  fontSize: '28px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '320px',
  gap: '12px',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #C2B6A3',
  fontSize: '16px',
};

export default Registro;