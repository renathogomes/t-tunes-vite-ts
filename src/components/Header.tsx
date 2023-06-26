import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';

function Header() {
  const [nameUser, setnameUser] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const nameLoad = async () => {
      setLoading(true);
      const { name } = await getUser();
      setnameUser(name);
      setLoading(false);
    };
    nameLoad();
  }, []);

  return (
    <header data-testid="header-component">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <NavLink
            to="./seach"
            data-test="link-to-search"
          >
            Pasquisar

          </NavLink>
          <NavLink
            to="./favorites"
            data-test="link-to-favorites"
          >
            Favoritos

          </NavLink>
          <NavLink
            to="./profile"
            data-test="link-to-profile"
          >
            Perfil

          </NavLink>
          <p data-testid="header-user-name">{ nameUser }</p>
        </>
      )}
    </header>
  );
}

export default Header;
