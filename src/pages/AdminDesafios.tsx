import React, { useState, useEffect } from 'react';

type TipoDesafio = 'quiz' | 'texto' | 'upload';

interface Desafio {
  id: number;
  tipo: TipoDesafio;
  titulo: string;
  descricao: string;
  pergunta?: string;
  alternativas?: string[];
  correta?: number;
}

function AdminDesafios() {
  const [desafios, setDesafios] = useState<Desafio[]>([]);
  const [criando, setCriando] = useState(false);
  const [tipo, setTipo] = useState<TipoDesafio>('quiz');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [alternativas, setAlternativas] = useState(['', '', '', '']);
  const [correta, setCorreta] = useState(0);

  useEffect(() => {
    const desafiosSalvos = localStorage.getItem('desafios');
    if (desafiosSalvos) {
      setDesafios(JSON.parse(desafiosSalvos));
    }
  }, []);

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    const novoDesafio: Desafio = {
      id: Date.now(),
      tipo,
      titulo,
      descricao,
      ...(tipo === 'quiz' && { pergunta, alternativas, correta }),
    };
    const atualizados = [...desafios, novoDesafio];
    setDesafios(atualizados);
    localStorage.setItem('desafios', JSON.stringify(atualizados));
    resetarFormulario();
  };

  const resetarFormulario = () => {
    setCriando(false);
    setTipo('quiz');
    setTitulo('');
    setDescricao('');
    setPergunta('');
    setAlternativas(['', '', '', '']);
    setCorreta(0);
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Administração de Desafios</h1>

      {!criando && (
        <button style={buttonStyle} onClick={() => setCriando(true)}>
          Novo Desafio
        </button>
      )}

      {criando && (
        <form onSubmit={handleSalvar} style={formStyle}>
          <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoDesafio)} style={inputStyle}>
            <option value="quiz">Múltipla escolha</option>
            <option value="texto">Resposta aberta</option>
            <option value="upload">Envio de arquivo</option>
          </select>

          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={inputStyle}
            required
          />

          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            style={textareaStyle}
            required
          />

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
                    <option key={i} value={i}>
                      Alternativa {i + 1}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

          <button type="submit" style={buttonStyle}>
            Salvar
          </button>
        </form>
      )}

      <h2 style={{ marginTop: '32px' }}>Desafios Cadastrados</h2>
      <ul style={listStyle}>
        {desafios.map((d) => (
          <li key={d.id} style={itemStyle}>
            <strong>{d.titulo}</strong> — {d.tipo === 'quiz' ? 'Múltipla escolha' : d.tipo === 'texto' ? 'Resposta aberta' : 'Upload'}
          </li>
        ))}
      </ul>
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
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  marginTop: '20px',
};

const itemStyle: React.CSSProperties = {
  marginBottom: '10px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

export default AdminDesafios;