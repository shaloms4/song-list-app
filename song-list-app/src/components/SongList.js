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
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          {song.title}
          <button onClick={() => setSelectedSong(song)}>Edit</button>
          <button onClick={() => dispatch(deleteSong(song.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
