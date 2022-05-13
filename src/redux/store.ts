import {
  configureStore,
  Middleware as ReduxMiddleware,
} from "@reduxjs/toolkit";
import { SagaMiddleware } from "redux-saga";
import { englishSentenceReducer } from "./english-sentence/english-sentence.slice";
import { rootReducer } from "./root-reducer";
import { rootSagaMiddleware } from "./root-saga";

const middleware: Array<SagaMiddleware | ReduxMiddleware> = [
  rootSagaMiddleware,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

rootSagaMiddleware.run(rootSaga);
export const reduxPersistor = persistStore(store);
