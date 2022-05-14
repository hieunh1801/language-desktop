import { combineReducers } from "@reduxjs/toolkit";
import { sentenceChallengeReducer } from "./sentence-challenge/sentence-challenge.slice";
import { sentenceManagementReducer } from "./sentence-management/sentence-management.slice";

export const rootReducer = combineReducers({
  sentenceManagement: sentenceManagementReducer,
  sentenceChallenge: sentenceChallengeReducer,
});
