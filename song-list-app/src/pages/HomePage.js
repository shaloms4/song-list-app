import React, { useState } from 'react';
import SongForm from '../components/SongForm';
import SongList from '../components/SongList';

const HomePage = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div>
      <h1>Song List</h1>
      <SongForm selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
      <SongList setSelectedSong={setSelectedSong} />
    </div>
  );
};

export default HomePage;
