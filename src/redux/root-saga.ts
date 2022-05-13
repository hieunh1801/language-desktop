import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { englishSentenceWatcherSaga } from "./english-sentence/english-sentence.saga";
export const rootSagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([englishSentenceWatcherSaga()]);
}
