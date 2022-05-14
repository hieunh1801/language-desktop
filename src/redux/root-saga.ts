import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { sentenceManagementWatcherSaga } from "./sentence-management/sentence-management.saga";

export const rootSagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([sentenceManagementWatcherSaga()]);
}
