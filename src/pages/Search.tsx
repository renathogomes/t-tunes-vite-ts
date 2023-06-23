import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

function Search() {
  const [artist, setArtist] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [albumList, setAlbumList] = useState<AlbumType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleArtistChance = (event: ChangeEvent<HTMLInputElement>) => {
    setArtist(event.target.value);
    setInputValue(event.target.value);
  };

  const getAlbum = async () => {
    const responseAlbum = await searchAlbumsAPI(inputValue);
    setAlbumList(responseAlbum);
  };
  const albumMap = albumList.map((album) => album.collectionId);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setArtist('');
    getAlbum();
    setLoading(true);
    console.log(albumMap);
  };

  const disableBtn = () => artist.length >= 2;

  return (
    <form onSubmit={ handleSubmit }>
      <input
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
      {albumMap.length !== 0
        ? (<p>{`Resultado de álbuns de: ${inputValue}`}</p>)
        : <p>Nenhum álbum foi encontrado</p>}

      <div>
        <Link
          to={ `/album/${albumMap}` }
          data-testid={ `link-to-album-${albumMap}` }
        >
          {albumMap}
        </Link>
      </div>

    </form>
  );
}

export default Search;
