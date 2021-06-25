import { all, call, take } from 'redux-saga/effects';
import axios from 'axios';

function loginApi() {
  return axios.post('/ap/login');
}

function* login() {
  yield call(loginApi);
}

function* watchLogin() {
  yield take('LOG_IN', login);
}
function* watchLogout() {
  yield take('LOG_OUT');
}
function* watchAddPost() {
  yield take('ADD_POST');
}

export default function* rootSaga() {
  yield all([
    // all - 배열 내에 있는 것을 동시에 실행 될 수 있게해준다.
    fork(watchLogin), // fork - 함수 실행
    call(watchLogout), // call - 함수 실행 fork vs call은 추후 설명
    fork(watchAddPost),
  ]);
}
