import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { sentenceChallengeWatcherSaga } from "./sentence-challenge/sentence-challenge.saga";
import { sentenceManagementWatcherSaga } from "./sentence-management/sentence-management.saga";

export const rootSagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([sentenceManagementWatcherSaga(), sentenceChallengeWatcherSaga()]);
}
