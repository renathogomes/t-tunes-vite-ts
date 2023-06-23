import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
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
  };
  const albumId = albumList.map((album) => album.collectionId);
  const albumImg = albumList.map((album) => album.artworkUrl100);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setArtist('');
    getAlbum();
    console.log(albumId);
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
      {albumId.length !== 0
        ? (<div>
          <p>{`Resultado de álbuns de: ${inputValue}`}</p>
          {albumList.map((album) => (
            <Link
              key={ album.collectionId }
              to={ `/album/${album.collectionId}` }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              {album.collectionName}
              <img
                key={ album.artistId }
                src={ album.artworkUrl100 }
                alt="Albuns"
              />
            </Link>))}
        </div>)
        : <p>Nenhum álbum foi encontrado</p>}

    </form>
  );
}

export default Search;
