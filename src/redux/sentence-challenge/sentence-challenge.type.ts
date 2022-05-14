import { PayloadAction } from "@reduxjs/toolkit";
import { Sentence } from "../../services/sentence/sentence.type";
import { FetchStatusEnum } from "../../services/service.type";

export interface SentenceChallengeSliceStateType {
  sentence?: Sentence;
  sentenceFetchStatus: FetchStatusEnum;
  sentenceFetchError?: string;
}

export type CompleteChallengeActionType = PayloadAction<{
  sentence: Sentence;
}>;
