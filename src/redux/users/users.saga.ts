import {call, put, takeLatest} from 'redux-saga/effects';
import api from '@services';
import {apiCall} from '../APISaga';
import {getUsers, getUsersSuccess} from './users.redux';

// TODO: Remove type any
export function* getUsersSaga(): Generator<any> {
  try {
    const response: any = yield apiCall(api._getUsers);
    if (response?.data) yield put(getUsersSuccess(response.data));
  } catch (err) {
    console.log('err====>', err);
  }
}

export default [takeLatest(getUsers()?.type, getUsersSaga)];
