import {all} from 'redux-saga/effects';

import {searchSaga} from './ducks/search';

export default function* rootSaga() {
  yield all([searchSaga()]);
}
