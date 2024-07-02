import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsStart, deleteSong } from '../features/songs/songsSlice';

const SongList = ({ setSelectedSong }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const loading = useSelector((state) => state.songs.loading);
  const error = useSelector((state) => state.songs.error);

  React.useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="song-list-container">
      {songs.map((song) => (
        <div className="song-card" key={song.id}>
          <div className="song-card-content">
            <h3>{song.title}</h3>
          </div>
          <div className="song-actions">
            <button onClick={() => setSelectedSong(song)}>Edit</button>
            <button onClick={() => dispatch(deleteSong(song.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;