import { PayloadAction } from "@reduxjs/toolkit";
import {
  Sentence,
  SentenceQueryOptions,
} from "../../services/sentence/sentence.type";
import { FetchStatusEnum } from "../../services/service.type";

export interface SentenceManagementSliceStateType {
  sentences: Sentence[];
  sentencesFetchStatus: FetchStatusEnum;
  sentencesFetchError?: string;
  sentencesQueryOptions: SentenceQueryOptions;
  sentencesTotal: number;
  createSentencesFetchStatus: FetchStatusEnum;
  createSentencesFetchError?: string;
}

export type CreateSentencesActionType = PayloadAction<{
  sentencesString: string;
}>;
