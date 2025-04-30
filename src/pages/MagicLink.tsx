import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setErro('Email ou senha inválidos.');
    } else {
      navigate('/progresso');
    }
  };

  const handleMagicLink = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setErro('Erro ao enviar o link.');
    } else {
      setEnviado(true);
    }
  };

  return (
    <div style={pageStyle}>
      <img src="/brig-game-logo.png" alt="Logo do Brig Game" style={logoStyle} />
      <h1 style={titleStyle}>Entrar no Brig Game</h1>
      <form onSubmit={handleLogin} style={formStyle}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Entrar com senha</button>
        <button type="button" style={buttonAltStyle} onClick={handleMagicLink}>
          Entrar com link mágico
        </button>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        {enviado && <p style={{ color: 'green' }}>Link enviado! Verifique seu e-mail.</p>}
      </form>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  backgroundColor: '#F5F0EB',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  padding: '32px',
};

const logoStyle: React.CSSProperties = {
  width: '120px',
  marginBottom: '24px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '28px',
  marginBottom: '24px',
  color: '#5C4A35',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  maxWidth: '320px',
};

const inputStyle: React.CSSProperties = {
  padding: '12px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #C2B6A3',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#7A6855',
  color: '#fff',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
};

const buttonAltStyle: React.CSSProperties = {
  backgroundColor: '#A69480',
  color: '#fff',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  cursor: 'pointer',
};

export default Login;