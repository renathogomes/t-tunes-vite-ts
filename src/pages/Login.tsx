import { ChangeEvent, FormEvent, useState } from 'react';

function Login() {
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleNameChance = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        id="name"
        data-testid="login-name-input"
        type="text"
        value={ name }
        onChange={ handleNameChance }
      />
      {name.length >= 3 ? <button data-testid="login-submit-button">Entrar</button>
        : <button disabled data-testid="login-submit-button">Entrar</button>}
    </form>
  );
}
export default Login;
