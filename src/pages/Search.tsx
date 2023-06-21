import { ChangeEvent, FormEvent, useState } from 'react';

function Search() {
  const [name, setName] = useState('');

  const handleNameChance = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const disableBtn = () => name.length >= 2;

    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        data-testid="search-artist-input"
        name={ name }
        onChange={ handleNameChance }
      />
      <button
        data-testid="search-artist-button"
        disabled={ !disableBtn() }
      >
        Pesquisar
      </button>
    </form>;
}

export default Search;
