import React, { useState } from 'react';
import styles from '../styles/Button.module.css';

function Registro() {
  const [foto, setFoto] = useState<string | null>(null);
  const [editarSenha, setEditarSenha] = useState(false);
  const email = "aluno@briggame.com"; // Exemplo fixo

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFoto(fileReader.result as string);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Editar Perfil</h1>

      <form style={formStyle}>
        <div style={fotoContainerStyle}>
          <label htmlFor="fotoInput">
            <img
              src={foto || "/default-profile.png"}
              alt="Foto de perfil"
              style={fotoStyle}
            />
          </label>
          <input
            id="fotoInput"
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            style={{ display: 'none' }}
          />
        </div>

        <input type="text" placeholder="Nome completo" style={inputStyle} required />

        <input type="text" placeholder="@ do Instagram" style={inputStyle} />

        <input type="email" value={email} style={inputStyle} disabled />

        {!editarSenha && (
          <button
            type="button"
            className={styles.button}
            onClick={() => setEditarSenha(true)}
          >
            Alterar Senha
          </button>
        )}

        {editarSenha && (
          <>
            <input type="password" placeholder="Nova senha" style={inputStyle} required />
            <input type="password" placeholder="Confirmar nova senha" style={inputStyle} required />
          </>
        )}

        <button type="submit" className={styles.button} style={{ marginTop: '20px' }}>
          Salvar Alterações
        </button>
      </form>
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

const fotoContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const fotoStyle: React.CSSProperties = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  objectFit: 'cover',
  cursor: 'pointer',
  border: '2px solid #C2B6A3',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #C2B6A3',
  fontSize: '16px',
};

export default Registro;
