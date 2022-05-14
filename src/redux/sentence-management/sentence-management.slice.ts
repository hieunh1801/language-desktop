import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sentence } from "../../services/sentence/sentence.type";
import { FetchStatusEnum } from "../../services/service.type";
import {
  CreateSentencesActionType,
  SentenceManagementSliceStateType,
} from "./sentence-management.type";

const initialState: SentenceManagementSliceStateType = {
  sentences: [],
  sentencesFetchStatus: FetchStatusEnum.IDLE,
  sentencesFetchError: undefined,
  sentencesQueryOptions: {
    _page: 1,
    _limit: 10,
    _sort: "id",
    _order: "desc",
  },
  sentencesTotal: 0,
  createSentencesFetchStatus: FetchStatusEnum.IDLE,
};

const englishSentenceSlice = createSlice({
  name: "englishSentence",
  initialState: initialState,
  reducers: {
    fetchSentences: (state) => {
      state.sentencesFetchStatus = FetchStatusEnum.FETCHING;
      state.sentencesFetchError = undefined;
    },
    fetchSentencesSuccess: (
      state,
      action: PayloadAction<{
        sentences: Sentence[];
        total: number;
      }>
    ) => {
      state.sentences = action.payload.sentences;
      state.sentencesTotal = action.payload.total;
      state.sentencesFetchStatus = FetchStatusEnum.SUCCESS;
    },
    fetchSentencesFailure: (
      state,
      action: PayloadAction<{
        error: string;
      }>
    ) => {
      state.sentencesFetchStatus = FetchStatusEnum.FAILURE;
      state.sentencesFetchError = action.payload.error;
    },
    createSentences: (state, _action: CreateSentencesActionType) => {
      state.createSentencesFetchStatus = FetchStatusEnum.FETCHING;
      state.createSentencesFetchError = undefined;
    },
    createSentencesSuccess: (state) => {
      state.createSentencesFetchStatus = FetchStatusEnum.SUCCESS;
    },
    createSentencesFailure: (
      state,
      action: PayloadAction<{
        error: string;
      }>
    ) => {
      state.createSentencesFetchStatus = FetchStatusEnum.FAILURE;
      state.createSentencesFetchError = action.payload.error;
    },
  },
});

export const sentenceManagementActions = englishSentenceSlice.actions;
export const sentenceManagementReducer = englishSentenceSlice.reducer;
