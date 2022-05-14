import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sentence } from "../../services/sentence/sentence.type";
import { FetchStatusEnum } from "../../services/service.type";
import {
  CompleteChallengeActionType,
  SentenceChallengeSliceStateType,
} from "./sentence-challenge.type";

const initialState: SentenceChallengeSliceStateType = {
  sentence: undefined,
  sentenceFetchStatus: FetchStatusEnum.IDLE,
  sentenceFetchError: undefined,
};

export const sentenceChallengeSlice = createSlice({
  name: "sentenceChallenge",
  initialState: initialState,
  reducers: {
    fetchSentence: (state) => {
      state.sentenceFetchStatus = FetchStatusEnum.FETCHING;
      state.sentenceFetchError = undefined;
    },
    fetchSentenceSuccess: (
      state,
      action: PayloadAction<{
        sentence: Sentence;
      }>
    ) => {
      state.sentence = action.payload.sentence;
      state.sentenceFetchStatus = FetchStatusEnum.SUCCESS;
      state.sentenceFetchError = undefined;
    },
    fetchSentenceFailure: (state, action) => {
      state.sentenceFetchStatus = FetchStatusEnum.FAILURE;
      state.sentenceFetchError = action.payload;
    },
    completeChallenge: (state, _action: CompleteChallengeActionType) => {
      state.sentenceFetchStatus = FetchStatusEnum.IDLE;
      state.sentenceFetchError = undefined;
    },
  },
});

export const sentenceChallengeActions = sentenceChallengeSlice.actions;

export const sentenceChallengeReducer = sentenceChallengeSlice.reducer;
