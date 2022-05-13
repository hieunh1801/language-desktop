import { combineReducers } from "@reduxjs/toolkit";
import { englishSentenceReducer } from "./english-sentence/english-sentence.slice";

export const rootReducer = combineReducers({
  englishSentence: englishSentenceReducer,
});
