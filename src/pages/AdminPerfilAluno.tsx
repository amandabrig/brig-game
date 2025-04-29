import React, { useEffect, useState } from 'react';

interface AlunoPerfil {
  nome: string;
  usuario: string;
  pontos: number;
  conquistas: string[];
  cursos: string[];
  desafiosValidados: number[];
}

const conquistasDisponiveis = ['Primeiro Desafio', '10 Pontos', 'Desafio Criativo'];
const cursosDisponiveis = ['Brig Game', 'Brig Club', 'Imersão de Páscoa'];

function AdminPerfilAluno() {
  const [aluno, setAluno] = useState<AlunoPerfil | null>(null);
  const [conquista, setConquista] = useState('');
  const [curso, setCurso] = useState('');
  const [novoPonto, setNovoPonto] = useState(0);

  useEffect(() => {
    const dados = localStorage.getItem('alunoAdmin');
    if (dados) setAluno(JSON.parse(dados));
  }, []);

  const salvarAluno = (atualizado: AlunoPerfil) => {
    setAluno(atualizado);
    localStorage.setItem('alunoAdmin', JSON.stringify(atualizado));
  };

  const adicionarPontos = () => {
    if (!aluno) return;
    salvarAluno({ ...aluno, pontos: aluno.pontos + novoPonto });
    setNovoPonto(0);
  };

  const adicionarConquista = () => {
    if (!aluno || !conquista || aluno.conquistas.includes(conquista)) return;
    salvarAluno({ ...aluno, conquistas: [...aluno.conquistas, conquista] });
  };

  const removerConquista = (c: string) => {
    if (!aluno) return;
    salvarAluno({ ...aluno, conquistas: aluno.conquistas.filter((x) => x !== c) });
  };

  const adicionarCurso = () => {
    if (!aluno || !curso || aluno.cursos.includes(curso)) return;
    salvarAluno({ ...aluno, cursos: [...aluno.cursos, curso] });
  };

  const removerCurso = (c: string) => {
    if (!aluno) return;
    salvarAluno({ ...aluno, cursos: aluno.cursos.filter((x) => x !== c) });
  };

  if (!aluno) return <p style={pageStyle}>Carregando aluno...</p>;

  return (
    <div style={pageStyle}>
      <h1>Perfil do Aluno</h1>
      <p><strong>Nome:</strong> {aluno.nome}</p>
      <p><strong>@:</strong> {aluno.usuario}</p>
      <p><strong>Pontos:</strong> {aluno.pontos}</p>

      <h3>Editar Pontuação</h3>
      <input
        type="number"
        value={novoPonto}
        onChange={(e) => setNovoPonto(Number(e.target.value))}
        style={inputStyle}
      />
      <button onClick={adicionarPontos} style={buttonStyle}>Adicionar Pontos</button>

      <h3>Conquistas</h3>
      <ul>
        {aluno.conquistas.map((c) => (
          <li key={c}>{c} <button onClick={() => removerConquista(c)}>Remover</button></li>
        ))}
      </ul>
      <select value={conquista} onChange={(e) => setConquista(e.target.value)} style={inputStyle}>
        <option value="">Selecionar conquista</option>
        {conquistasDisponiveis.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button onClick={adicionarConquista} style={buttonStyle}>Adicionar Conquista</button>

      <h3>Cursos</h3>
      <ul>
        {aluno.cursos.map((c) => (
          <li key={c}>{c} <button onClick={() => removerCurso(c)}>Remover</button></li>
        ))}
      </ul>
      <select value={curso} onChange={(e) => setCurso(e.target.value)} style={inputStyle}>
        <option value="">Selecionar curso</option>
        {cursosDisponiveis.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button onClick={adicionarCurso} style={buttonStyle}>Adicionar Curso</button>
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

const inputStyle: React.CSSProperties = {
  padding: '10px',
  marginTop: '8px',
  marginBottom: '8px',
  borderRadius: '6px',
  border: '1px solid #C2B6A3',
  width: '100%',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#7A6855',
  color: '#fff',
  padding: '10px 16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '8px',
};

export default AdminPerfilAluno;
