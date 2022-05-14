import { QueryOptions } from "../service.type";

export interface Sentence {
  id: number;
  en: string;
  vi: string;
  count: number;
  countAt: string;
  createdAt: string;
}

export interface SentenceCreateRequest {
  en: string;
  vi?: string;
  count: number;
  countAt: string;
  createdAt: string;
}

export interface SentenceUpdateRequest {
  id: number;
  en?: string;
  vi?: string;
  count?: number;
  countAt?: string;
  createdAt: string;
}

export interface SentenceQueryOptions extends QueryOptions {
  en?: string;
}
