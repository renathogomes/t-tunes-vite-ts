import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import { AlbumType, SongType } from '../types';
import MusicCard from '../components/MusicCard';

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState<[AlbumType, ...SongType[]]>();
  const paramId = String(id);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const musicFetch = async () => {
      setLoading(true);
      const musics = await getMusics(paramId);
      setLoading(false);
      setAlbum(musics);
    };
    musicFetch();
  }, [paramId]);

  return (
    <div>
      { loading ? (
        <p>Carregando...</p>
      ) : (
        album && album.length && (
          <div>
            <h2 data-testid="artist-name">
              { album[0].artistName}
            </h2>
            <h3 data-testid="album-name">
              { album[0].collectionName}
            </h3>
            <ul>
              { album && album.slice(1).map((music, index) => (<MusicCard
                key={ index }
                trackId={ 'trackId' in music ? music.trackId : 0 }
                trackName={ 'trackName' in music ? music.trackName : '' }
                previewUrl={ 'previewUrl' in music ? music.previewUrl : '' }
              />))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default Album;
