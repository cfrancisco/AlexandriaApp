
import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  getMovies: [],
});

/**
 * Handlers
 */
const INITIAL_STATE = [];


const getMovies = (state = INITIAL_STATE, action) => {
  return [
    ...action.data,
  ];
}
/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_MOVIES]: getMovies,
});
