import React from 'react';
import SongForm from '../components/SongForm';
import SongList from '../components/SongList';

const songsPageStyle = {
  padding: '50px 20px',
};

const SongsPage = () => {
  const [selectedSong, setSelectedSong] = React.useState(null);

  return (
    <div id="songs" style={songsPageStyle}>
      <h1>Songs</h1>
      <SongForm selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
      <SongList setSelectedSong={setSelectedSong} />
    </div>
  );
};

export default SongsPage;
