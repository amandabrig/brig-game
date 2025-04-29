import React, { useEffect, useState } from 'react';

interface AlunoPerfil {
  nome: string;
  usuario: string;
  pontos: number;
  conquistas: string[];
  cursos: string[];
}

function Progresso() {
  const [aluno, setAluno] = useState<AlunoPerfil | null>(null);

  useEffect(() => {
    const dados = localStorage.getItem('alunoAtual');
    if (dados) setAluno(JSON.parse(dados));
  }, []);

  if (!aluno) return <p style={pageStyle}>Carregando progresso...</p>;

  return (
    <div style={pageStyle}>
      <h1>Seu Progresso</h1>
      <p><strong>Nome:</strong> {aluno.nome}</p>
      <p><strong>@:</strong> {aluno.usuario}</p>
      <p><strong>Pontos:</strong> {aluno.pontos}</p>

      <h3>Conquistas</h3>
      {aluno.conquistas.length === 0 ? (
        <p>Nenhuma conquista ainda.</p>
      ) : (
        <ul>
          {aluno.conquistas.map((c, index) => (
            <li key={index}>🏅 {c}</li>
          ))}
        </ul>
      )}

      <h3>Cursos Realizados</h3>
      {aluno.cursos.length === 0 ? (
        <p>Nenhum curso concluído ainda.</p>
      ) : (
        <ul>
          {aluno.cursos.map((c, index) => (
            <li key={index}>📘 {c}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  backgroundColor: '#F5F0EB',
  minHeight: '100vh',
  padding: '32px',
  fontFamily: 'sans-serif',
  color: '#5C4A35',
};

export default Progresso;