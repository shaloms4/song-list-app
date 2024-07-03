import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsStart, updateSong, deleteSong } from '../features/songs/songsSlice';
import './SongList.css';

const SongList = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.songs);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const handleEditClick = (song) => {
    setEditingId(song.id);
    setNewTitle(song.title);
  };

  const handleSaveClick = (songId) => {
    dispatch(updateSong({ id: songId, title: newTitle }));
    setEditingId(null);
    setNewTitle('');
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setNewTitle('');
  };

  const handleDeleteClick = (songId) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      dispatch(deleteSong(songId));
    }
  };

  return (
    <div className="song-list-container">
      {loading ? (
        <p className="message">Loading...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : (
        songs.map((song) => (
          <div className="song-card" key={song.id}>
            <div className="song-card-content">
              {editingId === song.id ? (
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              ) : (
                <h3>{song.title}</h3>
              )}
            </div>
            <div className="song-actions">
              {editingId === song.id ? (
                <>
                  <button onClick={() => handleSaveClick(song.id)} className="save-button">
                    Save
                  </button>
                  <button onClick={handleCancelClick} className="cancel-button">
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditClick(song)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteClick(song.id)} className="delete-button">
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SongList;
