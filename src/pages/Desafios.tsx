import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TipoDesafio = 'quiz' | 'texto' | 'upload';

interface Desafio {
  id: number;
  tipo: TipoDesafio;
  titulo: string;
  descricao: string;
}

function Desafios() {
  const [desafios, setDesafios] = useState<Desafio[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const salvos = localStorage.getItem('desafios');
    if (salvos) {
      setDesafios(JSON.parse(salvos));
    }
  }, []);

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Desafios Disponíveis</h1>
      {desafios.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nenhum desafio cadastrado ainda.</p>
      ) : (
        <ul style={listStyle}>
          {desafios.map((d) => (
            <li key={d.id} style={itemStyle}>
              <h3 style={{ marginBottom: '8px' }}>{d.titulo}</h3>
              <p style={{ fontSize: '14px', color: '#7A6855' }}>{d.descricao}</p>
              <p style={{ fontSize: '12px', marginTop: '4px' }}>
                Tipo: <strong>{tipoLabel(d.tipo)}</strong>
              </p>
              <button style={buttonStyle} onClick={() => navigate(`/responder-desafio?id=${d.id}`)}>
                Responder
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function tipoLabel(tipo: TipoDesafio) {
  if (tipo === 'quiz') return 'Múltipla escolha';
  if (tipo === 'texto') return 'Resposta aberta';
  return 'Envio de arquivo';
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

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const itemStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '10px',
  backgroundColor: '#7A6855',
  color: '#fff',
  padding: '10px 16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
};

export default Desafios;