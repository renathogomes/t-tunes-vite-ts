import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';

function Login() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNameChance = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    createUser({ name })
      .then(() => {
        setLoading(false);
        navigate('/search');
      });
  };

  const disableBtn = () => name.length >= 3;

  return (
    <form onSubmit={ handleSubmit }>
      <input
        data-testid="login-name-input"
        type="text"
        value={ name }
        onChange={ handleNameChance }
      />
      <button
        data-testid="login-submit-button"
        disabled={ !disableBtn() }
        type="submit"
      >
        Entrar

      </button>
      { loading ? (<p>Carregando...</p>) : null}
    </form>
  );
}
export default Login;
