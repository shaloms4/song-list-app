import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsStart, deleteSong } from '../features/songs/songsSlice';
import './SongList.css';

const SongList = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.songs);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  React.useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const handleEditClick = (song) => {
    setEditingId(song.id);
    setNewTitle(song.title);
  };

  const handleSaveClick = (songId) => {
    // Add save logic here
    setEditingId(null);
    setNewTitle('');
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setNewTitle('');
  };

  const handleDeleteClick = (songId) => {
    dispatch(deleteSong(songId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="song-list-container">
      {songs.map((song) => (
        <div className="song-card" key={song.id}>
          <div className="song-card-content">
            {editingId === song.id ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="editing-song-title"
              />
            ) : (
              <h3>{song.title}</h3>
            )}
          </div>
          <div className="song-actions">
            {editingId === song.id ? (
              <>
                <button onClick={() => handleSaveClick(song.id)} className="save-button">Save</button>
                <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEditClick(song)} className="edit-button">Edit</button>
                <button onClick={() => handleDeleteClick(song.id)} className="delete-button">Delete</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;