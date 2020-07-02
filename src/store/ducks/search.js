import {createAction, createReducer} from '@reduxjs/toolkit';
import {put, call, takeEvery} from 'redux-saga/effects';
import {searchApi} from '../../api';

// -----|-----|-----|-----|-----| Types |-----|-----|-----|-----|----- //
const SEARCH_REQUEST = 'search/SEARCH_REQUEST';
const SEARCH_SUCCESS = 'search/SEARCH_SUCCESS';
const SEARCH_FAILURE = 'search/SEARCH_FAILURE';

const GET_USER_PHOTOS = 'user/GET_PHOTO';
const GET_USER_PHOTHOS_SUCCESS = 'user/GET_USER_PHOTHOS_SUCCESS';

// -----|-----|-----|-----|-----| Actions |-----|-----|-----|-----|----- //
export const searchRequestAction = createAction(SEARCH_REQUEST);
export const searchSuccessAction = createAction(SEARCH_SUCCESS);
export const searchFailureAction = createAction(SEARCH_FAILURE);

export const getUserPhotoAction = createAction(GET_USER_PHOTOS);
export const getUserPhotoSuccAction = createAction(GET_USER_PHOTHOS_SUCCESS);

// -----|-----|-----|-----|-----| Reducer |-----|-----|-----|-----|----- //
const initialState = {
  list: [],
  photos: [],
  isSearching: false,
  error: null,
};

const searchRequest = (state) => {
  state.isSearching = true;
  state.photos = [];
};

const searchSuccess = (state, {payload}) => {
  const {total, total_pages, results} = payload;
  state.isSearching = false;
  state.total = total;
  state.total_pages = total_pages;
  state.list = results;
};

const searchFailure = (state, {payload}) => {
  state.isSearching = false;
  state.error = payload;
};

const getUserPhotoSucc = (state, {payload}) => {
  state.isSearching = false;
  state.photos = payload;
};

export default createReducer(initialState, {
  [SEARCH_REQUEST]: searchRequest,
  [SEARCH_SUCCESS]: searchSuccess,
  [SEARCH_FAILURE]: searchFailure,
  [GET_USER_PHOTHOS_SUCCESS]: getUserPhotoSucc,
});

// -----|-----|-----|-----|-----| Sagas |-----|-----|-----|-----|----- //
function* search({payload: {term}}) {
  try {
    const {data} = yield call(searchApi.searchUsers, {term});
    yield put(searchSuccessAction(data));
  } catch (error) {
    yield put(searchFailureAction({error}));
  }
}

function* getUserPhotoSaga({payload: {username}}) {
  try {
    const {data} = yield call(searchApi.getUserPhoto, {username});
    yield put(getUserPhotoSuccAction(data));
  } catch (error) {
    yield put(searchFailureAction({error}));
  }
}
export function* searchSaga() {
  yield takeEvery(SEARCH_REQUEST, search);
  yield takeEvery(GET_USER_PHOTOS, getUserPhotoSaga);
}

// -----|-----|-----|-----|-----| Selector |-----|-----|-----|-----|----- //
