import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface AlunoPerfil {
  nome: string;
  usuario: string;
  pontos: number;
  conquistas: string[];
  cursos: string[];
}

function PerfilDinamico() {
  const { id } = useParams();
  const [aluno, setAluno] = useState<AlunoPerfil | null>(null);

  useEffect(() => {
    const dados = localStorage.getItem('alunos');
    if (dados && id) {
      const lista: AlunoPerfil[] = JSON.parse(dados);
      const encontrado = lista.find((a) => a.usuario.replace('@', '') === id);
      if (encontrado) setAluno(encontrado);
    }
  }, [id]);

  if (!aluno) return <p style={pageStyle}>Carregando perfil...</p>;

  return (
    <div style={pageStyle}>
      <h1>{aluno.nome}</h1>
      <p><strong>@{aluno.usuario}</strong></p>
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

export default PerfilDinamico;
