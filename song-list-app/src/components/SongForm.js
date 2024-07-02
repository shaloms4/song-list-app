import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSongStart, updateSong } from '../features/songs/songsSlice';

const SongForm = ({ selectedSong, setSelectedSong }) => {
  const [title, setTitle] = useState(selectedSong ? selectedSong.title : '');

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSong) {
      setTitle(selectedSong.title);
    } else {
      setTitle('');
    }
  }, [selectedSong]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    console.log('Adding song:', title); 
    if (selectedSong) {
      dispatch(updateSong({ ...selectedSong, title }));
    } else {
      dispatch(addSongStart({ userId: 1, id: Date.now(), title }));
    }
    setTitle('');
    setSelectedSong(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Song Title"
      />
      <button type="submit">{selectedSong ? 'Update Song' : 'Add Song'}</button>
    </form>
  );
};

export default SongForm;
