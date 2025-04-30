import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function CriarSenha() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    const user = sessionData?.session?.user;

    if (!user) {
      setErro('Usuário não autenticado.');
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: senha,
    });

    if (error) {
      setErro('Erro ao definir a senha.');
    } else {
      setSucesso(true);
      setTimeout(() => navigate('/progresso'), 2000);
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Criar Senha</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="password"
          placeholder="Nova senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Salvar</button>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        {sucesso && <p style={{ color: 'green' }}>Senha criada com sucesso!</p>}
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

const titleStyle: React.CSSProperties = {
  fontSize: '28px',
  marginBottom: '24px',
  color: '#5C4A35',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
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

export default CriarSenha;
