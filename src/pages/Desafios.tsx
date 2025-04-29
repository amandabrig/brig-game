import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Desafio {
  id: number;
  titulo: string;
  descricao: string;
  perguntas: Pergunta[];
}

interface Pergunta {
  id: number;
  tipo: 'quiz' | 'texto' | 'upload';
  enunciado: string;
  alternativas?: string[];
  correta?: number;
}

function Desafios() {
  const [desafios, setDesafios] = useState<Desafio[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem('desafios');
    if (dados) setDesafios(JSON.parse(dados));
  }, []);

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Desafios Disponíveis</h1>
      {desafios.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nenhum desafio cadastrado ainda.</p>
      ) : (
        desafios.map((desafio) => (
          <div key={desafio.id} style={cardStyle}>
            <h2>{desafio.titulo}</h2>
            <p>{desafio.descricao}</p>
            <p><strong>{desafio.perguntas.length}</strong> perguntas</p>
            <button onClick={() => navigate(`/responder-desafio?id=${desafio.id}`)} style={buttonStyle}>
              Responder
            </button>
          </div>
        ))
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

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  marginBottom: '24px',
  textAlign: 'center',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#7A6855',
  color: '#fff',
  padding: '10px 16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  marginTop: '10px'
};

export default Desafios;
