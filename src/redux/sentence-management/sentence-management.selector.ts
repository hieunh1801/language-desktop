import { RootState } from "../store";

export const sentenceManagementSelector = {
  sentences: (state: RootState) => state.sentenceManagement.sentences,
  sentencesFetchStatus: (state: RootState) =>
    state.sentenceManagement.sentencesFetchStatus,
  sentencesFetchError: (state: RootState) =>
    state.sentenceManagement.sentencesFetchError,
  sentencesQueryOptions: (state: RootState) =>
    state.sentenceManagement.sentencesQueryOptions,
  sentencesTotal: (state: RootState) => state.sentenceManagement.sentencesTotal,
};
