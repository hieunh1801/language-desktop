import { createSlice } from "@reduxjs/toolkit";
import { EnglishSentenceSliceStateType } from "./english-sentence.type";

const initialState: EnglishSentenceSliceStateType = {
  sentences: [
    {
      en: "Hello World",
      vi: "Xin chào thế giới",
    },
    {
      en: "How old are you?",
      vi: "Bạn bao nhiêu tuổi?",
    },
    {
      en: "How can I help you?",
      vi: "Tôi có thể giúp gì cho bạn?",
    },
  ],
};

const englishSentenceSlice = createSlice({
  name: "englishSentence",
  initialState: {
    englishSentence: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    addEnglishSentence: (state, action) => {
      state.englishSentence = action.payload;
    },
  },
});

export const englishSentenceActions = englishSentenceSlice.actions;
export const englishSentenceReducer = englishSentenceSlice.reducer;
