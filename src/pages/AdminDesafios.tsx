import React, { useEffect, useState } from 'react';

type TipoPergunta = 'quiz' | 'texto' | 'upload';

interface Pergunta {
  id: number;
  tipo: TipoPergunta;
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

function AdminDesafios() {
  const [desafios, setDesafios] = useState<Desafio[]>([]);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [tipo, setTipo] = useState<TipoPergunta>('quiz');
  const [enunciado, setEnunciado] = useState('');
  const [alternativas, setAlternativas] = useState(['', '', '', '']);
  const [correta, setCorreta] = useState(0);

  useEffect(() => {
    const dados = localStorage.getItem('desafios');
    if (dados) setDesafios(JSON.parse(dados));
  }, []);

  const salvarDesafios = (lista: Desafio[]) => {
    setDesafios(lista);
    localStorage.setItem('desafios', JSON.stringify(lista));
  };

  const adicionarPergunta = () => {
    const nova: Pergunta = {
      id: Date.now(),
      tipo,
      enunciado,
      ...(tipo === 'quiz' && { alternativas, correta }),
    };
    setPerguntas([...perguntas, nova]);
    setEnunciado('');
    setAlternativas(['', '', '', '']);
    setCorreta(0);
    setTipo('quiz');
  };

  const salvarDesafio = () => {
    const desafio: Desafio = {
      id: editandoId ?? Date.now(),
      titulo,
      descricao,
      perguntas,
    };

    let atualizados = [...desafios];
    if (editandoId) {
      atualizados = atualizados.map((d) => (d.id === editandoId ? desafio : d));
    } else {
      atualizados.push(desafio);
    }

    salvarDesafios(atualizados);
    resetarFormulario();
  };

  const resetarFormulario = () => {
    setEditandoId(null);
    setTitulo('');
    setDescricao('');
    setPerguntas([]);
  };

  const deletarDesafio = (id: number) => {
    const restante = desafios.filter((d) => d.id !== id);
    salvarDesafios(restante);
  };

  const editarDesafio = (d: Desafio) => {
    setEditandoId(d.id);
    setTitulo(d.titulo);
    setDescricao(d.descricao);
    setPerguntas(d.perguntas);
  };

  return (
    <div style={{ padding: 32, background: '#F5F0EB', minHeight: '100vh' }}>
      <h1>Administração de Desafios</h1>

      <div style={{ marginTop: 24, background: '#fff', padding: 24, borderRadius: 12 }}>
        <h2>{editandoId ? 'Editar' : 'Novo'} Desafio</h2>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          style={inputStyle}
        />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
          style={{ ...inputStyle, height: 60 }}
        />

        <h3 style={{ marginTop: 16 }}>Adicionar Pergunta</h3>
        <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoPergunta)} style={inputStyle}>
          <option value="quiz">Múltipla escolha</option>
          <option value="texto">Resposta aberta</option>
          <option value="upload">Envio de arquivo</option>
        </select>

        <input
          value={enunciado}
          onChange={(e) => setEnunciado(e.target.value)}
          placeholder="Enunciado da pergunta"
          style={inputStyle}
        />

        {tipo === 'quiz' && (
          <>
            {alternativas.map((alt, i) => (
              <input
                key={i}
                value={alt}
                placeholder={`Alternativa ${i + 1}`}
                onChange={(e) => {
                  const novas = [...alternativas];
                  novas[i] = e.target.value;
                  setAlternativas(novas);
                }}
                style={inputStyle}
              />
            ))}
            <select value={correta} onChange={(e) => setCorreta(Number(e.target.value))} style={inputStyle}>
              {[0, 1, 2, 3].map((i) => (
                <option key={i} value={i}>
                  Correta: Alternativa {i + 1}
                </option>
              ))}
            </select>
          </>
        )}

        <button onClick={adicionarPergunta} style={buttonStyle}>
          Adicionar Pergunta
        </button>

        <ul>
          {perguntas.map((p) => (
            <li key={p.id} style={{ marginTop: 12 }}>
              ✅ [{p.tipo}] {p.enunciado}
            </li>
          ))}
        </ul>

        <button onClick={salvarDesafio} style={buttonStyle}>
          {editandoId ? 'Atualizar' : 'Salvar'} Desafio
        </button>
      </div>

      <h2 style={{ marginTop: 40 }}>Desafios Cadastrados</h2>
      <ul>
        {desafios.map((d) => (
          <li key={d.id} style={{ marginBottom: 16, background: '#fff', padding: 16, borderRadius: 12 }}>
            <strong>{d.titulo}</strong>
            <br />
            {d.perguntas?.length || 0} perguntas
            <div style={{ marginTop: 8 }}>
              <button onClick={() => editarDesafio(d)} style={{ ...buttonStyle, marginRight: 8 }}>✏️ Editar</button>
              <button onClick={() => deletarDesafio(d.id)} style={buttonStyle}>🗑️ Apagar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '10px',
  margin: '6px 0',
  borderRadius: '6px',
  border: '1px solid #C2B6A3',
  width: '100%',
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

export default AdminDesafios;
