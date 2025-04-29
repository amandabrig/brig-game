import React from 'react';
import { useParams } from 'react-router-dom';

const dadosAlunos = [
  {
    instagram: '@amandabrig',
    nome: 'Amanda',
    xp: 850,
    cursos: ['Brig Game', 'Curso de Brigadeiros Coloridos'],
    conquistas: ['/badge1.png', '/badge2.png'],
    foto: '/aluno1.png'
  },
  {
    instagram: '@luana_doces',
    nome: 'Luana',
    xp: 720,
    cursos: ['Brig Game'],
    conquistas: ['/badge1.png'],
    foto: '/aluno2.png'
  },
  // ...adicione outros alunos aqui
];

function PerfilDinamico() {
  const { id } = useParams(); // ex: "@amandabrig"
  const aluno = dadosAlunos.find((a) => a.instagram === `@${id}`);

  if (!aluno) {
    return <p style={{ padding: '32px', color: '#5C4A35' }}>Perfil não encontrado.</p>;
  }

  return (
    <div style={pageStyle}>
      <div style={topoStyle}>
        <img src={aluno.foto} alt={aluno.nome} style={fotoStyle} />
        <div>
          <h2 style={nomeStyle}>{aluno.nome}</h2>
          <p style={instaStyle}>{aluno.instagram}</p>
          <p style={pontuacaoStyle}>Pontuação: {aluno.xp} XP</p>
        </div>
      </div>

      <div style={secaoStyle}>
        <h3 style={tituloSecao}>Cursos realizados</h3>
        <ul style={listaCursos}>
          {aluno.cursos.map((curso, i) => (
            <li key={i} style={itemCurso}>✅ {curso}</li>
          ))}
        </ul>
      </div>

      <div style={secaoStyle}>
        <h3 style={tituloSecao}>Conquistas</h3>
        <div style={conquistasStyle}>
          {aluno.conquistas.map((badge, i) => (
            <img key={i} src={badge} alt={`Conquista ${i + 1}`} style={badgeStyle} />
          ))}
        </div>
      </div>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  backgroundColor: '#F5F0EB',
  padding: '32px',
  fontFamily: 'sans-serif',
  color: '#5C4A35',
  maxWidth: '600px',
  margin: '0 auto',
};

const topoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '24px',
};

const fotoStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const nomeStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '22px',
};

const instaStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '16px',
  color: '#8A7660',
};

const pontuacaoStyle: React.CSSProperties = {
  fontSize: '16px',
  marginTop: '4px',
};

const secaoStyle: React.CSSProperties = {
  marginTop: '24px',
};

const tituloSecao: React.CSSProperties = {
  fontSize: '18px',
  marginBottom: '12px',
};

const listaCursos: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const itemCurso: React.CSSProperties = {
  marginBottom: '8px',
};

const conquistasStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
};

const badgeStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
};

export default PerfilDinamico;
