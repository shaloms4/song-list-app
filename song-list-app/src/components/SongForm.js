import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSongStart, updateSong } from '../features/songs/songsSlice';

const SongForm = ({ selectedSong, setSelectedSong }) => {
  const [title, setTitle] = useState(selectedSong ? selectedSong.title : '');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSong) {
      setTitle(selectedSong.title);
      setErrorMessage('');
    } else {
      setTitle('');
    }
  }, [selectedSong]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000);

      return () => clearTimeout(timer); // Clear the timer if the component unmounts or errorMessage changes
    }
  }, [errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMessage('Please enter a song title to add or edit songs.');
      return;
    }

    if (selectedSong) {
      dispatch(updateSong({ ...selectedSong, title }));
    } else {
      dispatch(addSongStart({ userId: 1, id: Date.now(), title }));
    }
    setTitle('');
    setSelectedSong(null);
    setErrorMessage('');
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default SongForm;
