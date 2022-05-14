import { call, put, takeLatest } from "redux-saga/effects";
import { sentenceService } from "../../services/sentence/sentence.service";
import { Sentence } from "../../services/sentence/sentence.type";
import { sentenceChallengeActions } from "./sentence-challenge.slice";
import { CompleteChallengeActionType } from "./sentence-challenge.type";

function* fetchSentenceSaga() {
  try {
    const response: Sentence = yield call(sentenceService.getChallengeSentence);
    yield put(
      sentenceChallengeActions.fetchSentenceSuccess({
        sentence: response,
      })
    );
  } catch (e: any) {
    console.error(e);
    yield put(
      sentenceChallengeActions.fetchSentenceFailure({
        error: e.message || "fetch data error",
      })
    );
  }
}

function* completeSentenceChallengeSaga(action: CompleteChallengeActionType) {
  try {
    const sentence = action.payload.sentence;
    console.log("completeSentenceChallengeSaga", sentence);
    yield call(
      sentenceService.completeSentenceChallenge,
      sentence.id,
      sentence
    );

    yield put(sentenceChallengeActions.fetchSentence());
  } catch (e: any) {
    console.error(e);
  }
}
export function* sentenceChallengeWatcherSaga() {
  yield takeLatest(
    sentenceChallengeActions.fetchSentence.type,
    fetchSentenceSaga
  );
  yield takeLatest(
    sentenceChallengeActions.completeChallenge.type,
    completeSentenceChallengeSaga
  );
}
