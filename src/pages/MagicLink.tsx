import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function MagicLink() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMagicLink = async () => {
      const hash = window.location.hash;
      const queryParams = new URLSearchParams(hash.replace('#', ''));
      const accessToken = queryParams.get('access_token');
      const refreshToken = queryParams.get('refresh_token');

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });

        if (!error) {
          navigate('/criar-senha'); // ou /progresso, dependendo do fluxo
        } else {
          console.error('Erro ao autenticar com magic link:', error.message);
        }
      } else {
        console.warn('Tokens não encontrados na URL');
      }
    };

    handleMagicLink();
  }, [navigate]);

  return <p style={{ textAlign: 'center', marginTop: '100px' }}>Autenticando...</p>;
}

export default MagicLink;