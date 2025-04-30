import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

function MagicLink() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Verificando...');

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;

      if (session) {
        const user = session.user;

        const { data: perfil } = await supabase
          .from('usuarios')
          .select('senha_definida')
          .eq('id', user.id)
          .single();

        if (perfil?.senha_definida) {
          setStatus('Login bem-sucedido!');
          navigate('/progresso');
        } else {
          setStatus('Redirecionando para definir senha...');
          navigate('/registro');
        }
      } else {
        setStatus('Link expirado ou inválido.');
      }
    };

    checkSession();
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