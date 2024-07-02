import React from 'react';
import SongForm from '../components/SongForm';
import SongList from '../components/SongList';
import './SongsPage.css';

const songsPageStyle = {
  padding: '50px 20px',
};

const SongsPage = () => {
  const [selectedSong, setSelectedSong] = React.useState(null);

  return (
    <div className="songs-page" id="songs" style={songsPageStyle}>
      <h1>Songs</h1>
      <div className="song-form-container">
        <SongForm selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
      </div>
      <SongList setSelectedSong={setSelectedSong} />
    </div>
  );
};

export default SongsPage;