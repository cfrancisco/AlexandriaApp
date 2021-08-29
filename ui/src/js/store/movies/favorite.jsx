import { createActions, createReducer } from "reduxsauce";

/**
    The "ducks" pattern combines the actions, action type constants, and reducers into a single redux file.
 *
 */

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  toggleFavorite: ["id"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {};

const toggleFavorite = (state = INITIAL_STATE, action) => {
  // should always creating a new object
  const res = Object.assign({}, state);
  res[action.movieId] = !state[action.movieId];
  return res;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_FAVORITE]: toggleFavorite,
});
