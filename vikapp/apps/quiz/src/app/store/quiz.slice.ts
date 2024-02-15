import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const QUIZ_FEATURE_KEY = 'quiz';

/*
 * Update these interfaces according to your requirements.
 */
export interface QuizEntity {
  id: number;
}

export interface QuizState extends EntityState<QuizEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string | null;
}

export const quizAdapter = createEntityAdapter<QuizEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchQuiz())
 * }, [dispatch]);
 * ```
 */
export const fetchQuiz = createAsyncThunk<QuizEntity[]>(
  'quiz/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getQuizs()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialQuizState: QuizState = quizAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const quizSlice = createSlice({
  name: QUIZ_FEATURE_KEY,
  initialState: initialQuizState,
  reducers: {
    add: quizAdapter.addOne,
    remove: quizAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuiz.pending, (state: QuizState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchQuiz.fulfilled,
        (state: QuizState, action: PayloadAction<QuizEntity[]>) => {
          quizAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchQuiz.rejected, (state: QuizState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const quizReducer = quizSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(quizActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const quizActions = quizSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllQuiz);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = quizAdapter.getSelectors();

export const getQuizState = (rootState: {
  [QUIZ_FEATURE_KEY]: QuizState;
}): QuizState => rootState[QUIZ_FEATURE_KEY];

export const selectAllQuiz = createSelector(getQuizState, selectAll);

export const selectQuizEntities = createSelector(getQuizState, selectEntities);
