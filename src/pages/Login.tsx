import { ChangeEvent, FormEvent, useState } from 'react';
import { createUser } from '../services/userAPI';

function Login() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleNameChance = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setLoading(true);
    createUser({ name })
      .then(() => setLoading(false));
  };

  const disableBtn = () => name.length >= 3;

  return (
    <form onSubmit={ handleSubmit }>
      <input
        id="name"
        data-testid="login-name-input"
        type="text"
        value={ name }
        onChange={ handleNameChance }
      />
      <button
        data-testid="login-submit-button"
        onClick={ handleClick }
        disabled={ !disableBtn() }
      >
        Entrar

      </button>
      { loading ? (<p>Carregando...</p>) : null}
    </form>
  );
}
export default Login;
