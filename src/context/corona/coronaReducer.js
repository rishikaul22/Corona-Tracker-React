import { GET_STATS, SET_LOADING } from '../types.js';

export default (state, action) => {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
  }
};
