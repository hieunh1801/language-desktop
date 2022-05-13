import {
  configureStore,
  Middleware as ReduxMiddleware,
} from "@reduxjs/toolkit";
import { SagaMiddleware } from "redux-saga";
import { rootReducer } from "./root-reducer";
import { rootSaga, rootSagaMiddleware } from "./root-saga";

const middleware: Array<SagaMiddleware | ReduxMiddleware> = [
  rootSagaMiddleware,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

rootSagaMiddleware.run(rootSaga);
