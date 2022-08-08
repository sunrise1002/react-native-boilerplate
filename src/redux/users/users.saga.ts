import {call} from 'redux-saga/effects';
import api from '@src/services';

export function* getUsers() {
  try {
    const response = yield call(api._getUsers);
    console.log(response);
  } catch (err) {}
}

export default [];
