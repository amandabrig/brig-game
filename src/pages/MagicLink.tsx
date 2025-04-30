import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

function MagicLink() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Verificando...');

  useEffect(() => {
    const verifySession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data?.session) {
        setStatus('Login bem-sucedido! Redirecionando...');
        setTimeout(() => navigate('/progresso'), 1500);
      } else {
        setStatus('Link inválido ou expirado.');
      }
    };

    verifySession();
  }, [navigate]);

  return (
    <div style={pageStyle}>
      <p>{status}</p>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  backgroundColor: '#F5F0EB',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  fontSize: '18px',
  color: '#5C4A35',
};

export default MagicLink;