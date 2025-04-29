import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AlunoPerfil {
  nome: string;
  usuario: string;
  pontos: number;
  conquistas: string[];
  cursos: string[];
  desafiosValidados: number[];
}

function ListaAlunosAdmin() {
  const [alunos, setAlunos] = useState<AlunoPerfil[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem('alunos');
    if (dados) setAlunos(JSON.parse(dados));
  }, []);

  const abrirPerfil = (usuario: string) => {
    navigate(`/admin/perfil/${usuario}`);
  };

  return (
    <div style={pageStyle}>
      <h1>Gerenciar Alunos</h1>
      {alunos.length === 0 ? (
        <p>Nenhum aluno cadastrado ainda.</p>
      ) : (
        <ul>
          {alunos.map((a) => (
            <li key={a.usuario} style={cardStyle}>
              <strong>{a.nome}</strong> — @{a.usuario}<br />
              Pontos: {a.pontos}
              <button onClick={() => abrirPerfil(a.usuario)} style={buttonStyle}>
                Acessar Perfil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  padding: '32px',
  backgroundColor: '#F5F0EB',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
};

const cardStyle: React.CSSProperties = {
  background: '#fff',
  padding: '16px',
  borderRadius: '8px',
  marginBottom: '12px',
  boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
};

const buttonStyle: React.CSSProperties = {
  marginTop: 8,
  backgroundColor: '#7A6855',
  color: 'white',
  border: 'none',
  borderRadius: 6,
  padding: '8px 12px',
  cursor: 'pointer',
};

export default ListaAlunosAdmin;
