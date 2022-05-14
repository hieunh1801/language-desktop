import { combineReducers } from "@reduxjs/toolkit";
import { sentenceManagementReducer } from "./sentence-management/sentence-management.slice";

export const rootReducer = combineReducers({
  sentenceManagement: sentenceManagementReducer,
});
