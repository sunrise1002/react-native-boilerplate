import {call} from 'redux-saga/effects';

// TODO: Remove type any
export const apiCall = function* (fn: any): Generator<any> {
  try {
    const response = yield call(fn);

    return response;
  } catch (err: any) {
    if (__DEV__) {
      console.group(err?.config?.url);
      console.log('config', err?.config);
    }
    if (err?.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      if (__DEV__) {
        console.log('error data', err?.response?.data);
        console.log('error status', err?.response?.status);
        console.log('error headers', err?.response?.headers);
        console.groupEnd();
      }

      throw err?.response?.data; // IMPORTANCE: Need return 'response.data' property to get response error
    } else if (err?.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js

      if (__DEV__) {
        console.log('error request', err?.request);
        console.groupEnd();
      }

      throw err?.request?._response;
    } else {
      // Something happened in setting up the request that triggered an Error

      if (__DEV__) {
        console.log('error message', err?.message);
        console.groupEnd();
      }
      throw err?.message;
    }
  }
};
