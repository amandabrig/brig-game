import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Pergunta {
  id: number;
  tipo: 'quiz' | 'texto' | 'upload';
  enunciado: string;
  alternativas?: string[];
  correta?: number;
}

interface Desafio {
  id: number;
  titulo: string;
  descricao: string;
  perguntas: Pergunta[];
}

function ResponderDesafio() {
  const [params] = useSearchParams();
  const [desafio, setDesafio] = useState<Desafio | null>(null);
  const [respostas, setRespostas] = useState<Record<number, any>>({});

  useEffect(() => {
    const id = Number(params.get('id'));
    const dados = localStorage.getItem('desafios');
    if (dados) {
      const lista: Desafio[] = JSON.parse(dados);
      const encontrado = lista.find((d) => d.id === id);
      if (encontrado) setDesafio(encontrado);
    }
  }, [params]);

  const handleChange = (id: number, valor: any) => {
    setRespostas({ ...respostas, [id]: valor });
  };

  const handleUpload = (id: number, files: FileList | null) => {
    setRespostas({ ...respostas, [id]: files?.[0] || null });
  };

  const handleSubmit = () => {
    console.log('Respostas enviadas:', respostas);
    alert('Desafio enviado com sucesso!');
  };

  if (!desafio) return <div style={pageStyle}>Carregando desafio...</div>;

  return (
    <div style={pageStyle}>
      <h1>{desafio.titulo}</h1>
      <p>{desafio.descricao}</p>

      {desafio.perguntas.map((pergunta, index) => (
        <div key={pergunta.id} style={cardStyle}>
          <p><strong>{index + 1}.</strong> {pergunta.enunciado}</p>

          {pergunta.tipo === 'quiz' && (
            <div>
              {pergunta.alternativas?.map((alt, i) => (
                <label key={i} style={{ display: 'block', marginBottom: 6 }}>
                  <input
                    type="radio"
                    name={`pergunta-${pergunta.id}`}
                    value={i}
                    checked={respostas[pergunta.id] === i}
                    onChange={() => handleChange(pergunta.id, i)}
                  />{' '}{alt}
                </label>
              ))}
            </div>
          )}

          {pergunta.tipo === 'texto' && (
            <textarea
              placeholder="Digite sua resposta"
              value={respostas[pergunta.id] || ''}
              onChange={(e) => handleChange(pergunta.id, e.target.value)}
              style={inputStyle}
            />
          )}

          {pergunta.tipo === 'upload' && (
            <input
              type="file"
              onChange={(e) => handleUpload(pergunta.id, e.target.files)}
              style={inputStyle}
            />
          )}
        </div>
      ))}

      <button onClick={handleSubmit} style={buttonStyle}>Enviar Respostas</button>
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

const cardStyle: React.CSSProperties = {
  background: '#fff',
  padding: '16px',
  borderRadius: '12px',
  marginBottom: '20px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
};

const inputStyle: React.CSSProperties = {
  marginTop: 8,
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #C2B6A3',
  width: '100%',
};

const buttonStyle: React.CSSProperties = {
  marginTop: 20,
  padding: '12px 24px',
  backgroundColor: '#7A6855',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
};

export default ResponderDesafio;
