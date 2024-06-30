import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, updateSong } from '../features/songs/songsSlice';

const SongForm = ({ selectedSong, setSelectedSong }) => {
  const [title, setTitle] = useState(selectedSong ? selectedSong.title : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSong) {
      dispatch(updateSong({ ...selectedSong, title }));
    } else {
      dispatch(addSong({ userId: 1, id: Date.now(), title }));
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
