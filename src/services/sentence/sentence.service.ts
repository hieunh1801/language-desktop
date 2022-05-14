import { environment } from "../../environments/environment";
import { objectToQueryString } from "../../util/object.util";
import { ListDataResponse } from "../service.type";
import {
  Sentence,
  SentenceCreateRequest,
  SentenceQueryOptions,
  SentenceUpdateRequest,
} from "./sentence.type";

export const sentenceService = {
  getSentences: async (
    queryOptions: SentenceQueryOptions
  ): Promise<ListDataResponse<Sentence>> => {
    const queryString = objectToQueryString(queryOptions);
    const url = environment.baseUrl + "/sentences?" + queryString;
    const response = await fetch(url);
    const data: Sentence[] = await response.json();
    const total = response?.headers?.get("X-Total-Count");
    return {
      data: data,
      total: total ? parseInt(total) : 0,
    };
  },
  getSentence: async (id: string): Promise<Sentence> => {
    const url = environment.baseUrl + "/sentences/" + id;
    const response = await fetch(url);
    const data: Sentence = await response.json();
    return data;
  },
  createSentence: async (
    body: SentenceCreateRequest
  ): Promise<Sentence | void> => {
    const existedSentence = await sentenceService.getSentences({
      en: body.en,
      _order: "id",
      _sort: "desc",
    });
    if (existedSentence) {
      console.log("sentence existed");
      return;
    }
    const url = environment.baseUrl + "/sentences";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data: Sentence = await response.json();
    return data;
  },
  createSentences: async (
    body: SentenceCreateRequest[]
  ): Promise<Sentence[]> => {
    const url = environment.baseUrl + "/sentences";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data: Sentence[] = await response.json();
    return data;
  },
  updateSentence: async (
    id: string,
    body: SentenceUpdateRequest
  ): Promise<Sentence> => {
    const url = environment.baseUrl + "/sentences/" + id;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data: Sentence = await response.json();
    return data;
  },
  deleteSentence: async (id: string): Promise<Sentence> => {
    const url = environment.baseUrl + "/sentences/" + id;
    const data = await fetch(url, {
      method: "DELETE",
    });
    const response: Sentence = await data.json();
    return response;
  },
};
