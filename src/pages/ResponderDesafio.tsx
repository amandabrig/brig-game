import React, { useState } from 'react';

function ResponderDesafio() {
  const [tipo, setTipo] = useState<'quiz' | 'upload'>('quiz'); // Aqui futuramente virá da base de dados
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null);
  const [arquivo, setArquivo] = useState<File | null>(null);

  const alternativas = ['Opção A', 'Opção B', 'Opção C', 'Opção D'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tipo === 'quiz') {
      console.log('Resposta selecionada:', respostaSelecionada);
    } else {
      console.log('Arquivo enviado:', arquivo);
    }
    alert('Resposta enviada com sucesso!');
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Desafio: Nome do Desafio</h1>
      <p style={descricaoStyle}>Descrição breve sobre o desafio...</p>

      <form onSubmit={handleSubmit} style={formStyle}>
        {tipo === 'quiz' && (
          <div style={quizContainerStyle}>
            {alternativas.map((alt, index) => (
              <label key={index} style={alternativaStyle}>
                <input
                  type="radio"
                  name="resposta"
                  value={index}
                  checked={respostaSelecionada === index}
                  onChange={() => setRespostaSelecionada(index)}
                  required
                />
                {alt}
              </label>
            ))}
          </div>
        )}

        {tipo === 'upload' && (
          <div style={uploadContainerStyle}>
            <input
              type="file"
              onChange={(e) => setArquivo(e.target.files?.[0] || null)}
              required
            />
          </div>
        )}

        <button type="submit" style={buttonStyle}>Enviar Resposta</button>
      </form>
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
  marginBottom: '16px',
};

const descricaoStyle: React.CSSProperties = {
  fontSize: '16px',
  marginBottom: '24px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const quizContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const alternativaStyle: React.CSSProperties = {
  fontSize: '16px',
};

const uploadContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#7A6855',
  color: '#fff',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default ResponderDesafio;
