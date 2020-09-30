import { all, fork } from 'redux-saga/effects';
import {watchFetchProductList} from './FetchProductList';

export default function* rootSaga(api) {
  yield all([fork(watchFetchProductList)])
}