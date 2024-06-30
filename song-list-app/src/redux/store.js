import { configureStore } from '@reduxjs/toolkit';
import { songsReducer } from '../features/songs/songsSlice';
import { watchSongsSaga } from '../features/songs/songsSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchSongsSaga);
