import { RootState } from "../store";

export const sentenceChallengeSelector = {
  sentence: (state: RootState) => state.sentenceChallenge.sentence,
  sentenceFetchStatus: (state: RootState) =>
    state.sentenceChallenge.sentenceFetchStatus,
  sentenceFetchError: (state: RootState) =>
    state.sentenceChallenge.sentenceFetchError,
};
