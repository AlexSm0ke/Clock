import { GET_TIME } from '../types/timeTypes';

const timeReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TIME:
      return payload;
    default:
      return state;
  }
};


export default timeReducer;
