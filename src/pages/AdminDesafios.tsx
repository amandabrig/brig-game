 import React, { useState } from 'react';

function AdminDesafios() {
  const [tipo, setTipo] = useState<'quiz' | 'upload'>('quiz');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [alternativas, setAlternativas] = useState(['', '', '', '']);
  const [correta, setCorreta] = useState(0);
  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const desafio = {
      tipo,
      titulo,
      descricao,
      ...(tipo === 'quiz'
        ? { pergunta, alternativas, correta }
        : { arquivo }),
    };
    console.log('Desafio criado:', desafio);
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Criar Novo Desafio</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Título do desafio"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={inputStyle}
          required
        />

        <textarea
          placeholder="Descrição do desafio"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={textareaStyle}
          required
        />

        <label style={labelStyle}>
          Tipo:
          <select value={tipo} onChange={(e) => setTipo(e.target.value as 'quiz' | 'upload')} style={inputStyle}>
            <option value="quiz">Quiz</option>
            <option value="upload">Envio de arquivo</option>
          </select>
        </label>

        {tipo === 'quiz' && (
          <>
            <input
              type="text"
              placeholder="Pergunta"
              value={pergunta}
              onChange={(e) => setPergunta(e.target.value)}
              style={inputStyle}
              required
            />
            {alternativas.map((alt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Alternativa ${i + 1}`}
                value={alt}
                onChange={(e) => {
                  const novas = [...alternativas];
                  novas[i] = e.target.value;
                  setAlternativas(novas);
                }}
                style={inputStyle}
                required
              />
            ))}
            <label style={labelStyle}>
              Resposta correta:
              <select value={correta} onChange={(e) => setCorreta(Number(e.target.value))} style={inputStyle}>
                {[0, 1, 2, 3].map((i) => (
                  <option key={i} value={i}>Alternativa {i + 1}</option>
                ))}
              </select>
            </label>
          </>
        )}

        {tipo === 'upload' && (
          <label style={labelStyle}>
            Upload do exemplo ou material:
            <input
              type="file"
              onChange={(e) => setArquivo(e.target.files?.[0] || null)}
              style={inputStyle}
              required
            />
          </label>
        )}

        <button type="submit" style={buttonStyle}>Salvar Desafio</button>
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
  marginBottom: '24px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: '500px',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #C2B6A3',
  fontSize: '16px',
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: '80px',
};

const labelStyle: React.CSSProperties = {
  fontSize: '16px',
  marginTop: '12px',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#7A6855',
  color: '#fff',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default AdminDesafios;