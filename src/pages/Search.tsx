import { ChangeEvent, FormEvent, useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

function Search() {
  const [artist, setArtist] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [albumList, setAlbumList] = useState<AlbumType[]>([]);

  const handleArtistChance = (event: ChangeEvent<HTMLInputElement>) => {
    setArtist(event.target.value);
    setInputValue(event.target.value);
  };

  const getAlbum = async () => {
    const responseAlbum = await searchAlbumsAPI(inputValue);
    setAlbumList(responseAlbum);
    console.log(albumList);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setArtist('');
    getAlbum();
  };

  const disableBtn = () => artist.length >= 2;

  return (
    <form onSubmit={ handleSubmit }>
      <input
        id="inputLabel"
        type="text"
        data-testid="search-artist-input"
        value={ artist }
        onChange={ handleArtistChance }
        placeholder="album ou banda"
      />
      <button
        id="btn"
        data-testid="search-artist-button"
        disabled={ !disableBtn() }
        type="submit"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Search;
