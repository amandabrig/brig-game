import React, { useEffect, useState } from 'react';

interface RespostaAluno {
  desafioId: number;
  respostas: Record<number, any>;
}

interface Desafio {
  id: number;
  titulo: string;
  perguntas: Pergunta[];
}

interface Pergunta {
  id: number;
  tipo: 'quiz' | 'texto' | 'upload';
  enunciado: string;
  alternativas?: string[];
  correta?: number;
}

function AdminRespostas() {
  const [respostas, setRespostas] = useState<RespostaAluno[]>([]);
  const [desafios, setDesafios] = useState<Desafio[]>([]);

  useEffect(() => {
    const dadosRespostas = localStorage.getItem('respostas');
    const dadosDesafios = localStorage.getItem('desafios');
    if (dadosRespostas) setRespostas(JSON.parse(dadosRespostas));
    if (dadosDesafios) setDesafios(JSON.parse(dadosDesafios));
  }, []);

  const validarResposta = (resposta: any) => {
    if (typeof resposta === 'string') return resposta.trim().length > 0;
    if (typeof resposta === 'number') return true;
    if (resposta instanceof File) return true;
    return false;
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Administração de Respostas</h1>

      {respostas.length === 0 ? (
        <p>Nenhuma resposta enviada ainda.</p>
      ) : (
        respostas.map((resp, index) => {
          const desafio = desafios.find(d => d.id === resp.desafioId);
          return (
            <div key={index} style={cardStyle}>
              <h2>Desafio: {desafio ? desafio.titulo : 'Desconhecido'}</h2>
              {desafio?.perguntas.map((p, idx) => (
                <div key={p.id} style={{ marginTop: 12 }}>
                  <strong>{idx + 1}.</strong> {p.enunciado}
                  <div style={{ marginTop: 6 }}>
                    {p.tipo === 'quiz' && (
                      <p>Escolha: Alternativa {Number(resp.respostas[p.id]) + 1}</p>
                    )}
                    {p.tipo === 'texto' && (
                      <p>Resposta: {resp.respostas[p.id]}</p>
                    )}
                    {p.tipo === 'upload' && (
                      <p>Arquivo enviado: {resp.respostas[p.id]?.name || 'Não enviado'}</p>
                    )}
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 16 }}>
                <button style={buttonStyle}>✅ Validar</button>
                <button style={{ ...buttonStyle, marginLeft: 8 }}>❌ Rejeitar</button>
              </div>
            </div>
          );
        })
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
  fontSize: '28px',
  marginBottom: '24px',
};

const cardStyle: React.CSSProperties = {
  background: '#fff',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const buttonStyle: React.CSSProperties = {
  marginTop: 12,
  padding: '10px 20px',
  backgroundColor: '#7A6855',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
};

export default AdminRespostas;
