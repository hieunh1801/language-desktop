import { call, put, select, takeLatest } from "redux-saga/effects";
import { sentenceService } from "../../services/sentence/sentence.service";
import {
  Sentence,
  SentenceCreateRequest,
  SentenceQueryOptions,
} from "../../services/sentence/sentence.type";
import { ListDataResponse } from "../../services/service.type";
import { sentenceManagementSelector } from "./sentence-management.selector";
import { sentenceManagementActions } from "./sentence-management.slice";
import { CreateSentencesActionType } from "./sentence-management.type";

function* fetchSentencesSaga() {
  try {
    const queryOptions: SentenceQueryOptions = yield select(
      sentenceManagementSelector.sentencesQueryOptions
    );
    const response: ListDataResponse<Sentence> = yield call(
      sentenceService.getSentences,
      queryOptions
    );
    yield put(
      sentenceManagementActions.fetchSentencesSuccess({
        sentences: response.data,
        total: response.total,
      })
    );
  } catch (e: any) {
    console.log(e);
  }
}

function* createSentencesSaga(action: CreateSentencesActionType) {
  try {
    const sentencesString: string = action.payload.sentencesString;
    console.log("sentencesString", sentencesString);
    if (!sentencesString) {
      return;
    }
    const currentDateTimeString = new Date().toISOString();
    const newSentences: SentenceCreateRequest[] = sentencesString
      .trim()
      .split(".")
      .filter((sentence: string) => sentence.length > 0)
      .map(
        (sentence: string) =>
          ({
            en: sentence,
            vi: "",
            createdAt: currentDateTimeString,
            count: 0,
            countAt: currentDateTimeString,
          } as SentenceCreateRequest)
      );
    console.log("new sentences", newSentences);
    for (const newSentence of newSentences) {
      yield call(sentenceService.createSentence, newSentence);
    }
    yield put(sentenceManagementActions.createSentencesSuccess());
    yield put(sentenceManagementActions.fetchSentences());
  } catch (e: any) {
    console.log(e);
  }
}
export function* sentenceManagementWatcherSaga() {
  yield takeLatest(
    sentenceManagementActions.fetchSentences.type,
    fetchSentencesSaga
  );
  yield takeLatest(
    sentenceManagementActions.createSentences.type,
    createSentencesSaga
  );
}
