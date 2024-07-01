import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSong,
  deleteSong,
} from './songsSlice';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function* fetchSongs() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addNewSong(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(addSongSuccess(response.data)); // Use the response data to ensure consistency
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* updateExistingSong(action) {
  try {
    yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
    yield put(updateSong(action.payload));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* deleteExistingSong(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteSong(action.payload));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export function* watchSongsSaga() {
  yield takeEvery(fetchSongsStart.type, fetchSongs);
  yield takeEvery(addSongStart.type, addNewSong);
  yield takeEvery(updateSong.type, updateExistingSong);
  yield takeEvery(deleteSong.type, deleteExistingSong);
}
