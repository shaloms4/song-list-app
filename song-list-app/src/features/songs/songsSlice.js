import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchSongsStart(state) {
      state.loading = true;
    },
    fetchSongsSuccess(state, action) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addSongStart(state) {
      state.loading = true;
    },
    addSongSuccess(state, action) {
      state.songs.unshift(action.payload); 
      state.loading = false;
    },
    addSongFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateSong(state, action) {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSong(state, action) {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSong,
  deleteSong,
} = songsSlice.actions;

export const songsReducer = songsSlice.reducer;
