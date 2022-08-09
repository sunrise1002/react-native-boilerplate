import {all} from 'redux-saga/effects';
import usersTakeSagas from './users/users.saga';

export default function* rootSaga() {
  yield all([...usersTakeSagas]);
}
